(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.StockIndustryLinks = api;
  if (root.document) {
    api.init();
  }
})(typeof window !== "undefined" ? window : globalThis, function (root) {
  "use strict";

  const DEFAULT_REGISTRY_SCRIPT_URL =
    "https://willcoming.github.io/stockIndustryReport/data/stocks.js";
  const READY_EVENT = "stock-industry-reports:ready";
  const REGISTRY_RETRY_COUNT = 40;
  const REGISTRY_RETRY_DELAY_MS = 250;
  const REPORT_LINK_CLASS = "stock-industry-report-link";
  const REPORT_LINK_TITLE = "開啟 Deep Research 報告";
  const REPORT_ICON_SVG =
    '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">' +
    '<path d="M6 4.5h8l4 4V19.5H6z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>' +
    '<path d="M14 4.5v4h4M8.5 12h7M8.5 15.5h7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>' +
    "</svg>";

  function compact(value) {
    return String(value || "").trim();
  }

  function normalizeMarket(value, symbol) {
    const text = compact(value).toLowerCase();
    if (["tw", "twse", "tpex", "taiwan", "台股", "上市", "上櫃"].some((item) => text.includes(item))) {
      return "tw";
    }
    if (["us", "nyse", "nasdaq", "amex", "美股"].some((item) => text.includes(item))) {
      return "us";
    }
    return /^\d{4}(?:\.(?:tw|two))?$/i.test(compact(symbol)) ? "tw" : "us";
  }

  function normalizeSymbol(symbol, market) {
    let clean = compact(symbol).toUpperCase();
    clean = clean.replace(/^["'`]+|["'`]+$/g, "");
    clean = clean.replace(/^(?:TWSE|TPEX|NASDAQ|NYSE|AMEX)[:/.-]/i, "");
    clean = clean.replace(/\?.*$/, "").replace(/\/+$/, "");
    if (market === "tw") {
      return clean.replace(/\.(?:TW|TWO)$/i, "");
    }
    return clean.replace(/\s+/g, "").replace(/-/g, ".");
  }

  function keyFor(market, symbol) {
    const normalizedMarket = normalizeMarket(market, symbol);
    const normalizedSymbol = normalizeSymbol(symbol, normalizedMarket);
    if (!normalizedSymbol) {
      return "";
    }
    return `${normalizedMarket}:${normalizedSymbol.toLowerCase()}`;
  }

  function symbolVariants(market, symbol) {
    const normalizedMarket = normalizeMarket(market, symbol);
    const normalizedSymbol = normalizeSymbol(symbol, normalizedMarket);
    if (!normalizedSymbol) {
      return [];
    }
    const variants = new Set([normalizedSymbol]);
    if (normalizedMarket === "us") {
      variants.add(normalizedSymbol.replace(/\./g, "-"));
    }
    if (normalizedMarket === "tw") {
      variants.add(`${normalizedSymbol}.TW`);
      variants.add(`${normalizedSymbol}.TWO`);
    }
    return Array.from(variants);
  }

  function keysForSymbol(market, symbol) {
    const normalizedMarket = normalizeMarket(market, symbol);
    return symbolVariants(normalizedMarket, symbol)
      .map((variant) => keyFor(normalizedMarket, variant))
      .filter(Boolean);
  }

  function safeUrl(value) {
    try {
      return new URL(value, "https://stockloop.local/");
    } catch (_error) {
      return null;
    }
  }

  function stockKeysFromHref(href) {
    const url = safeUrl(href);
    if (!url) {
      return [];
    }
    const host = url.hostname.toLowerCase();
    const pathParts = url.pathname.split("/").filter(Boolean);
    const keys = new Set();

    if (host === "tw.stock.yahoo.com" && pathParts[0] === "quote" && pathParts[1]) {
      keysForSymbol("tw", pathParts[1]).forEach((key) => keys.add(key));
    }

    if (host === "finance.yahoo.com" && pathParts[0] === "quote" && pathParts[1]) {
      keysForSymbol("us", pathParts[1]).forEach((key) => keys.add(key));
    }

    if (host.endsWith("tradingview.com")) {
      const querySymbol = url.searchParams.get("symbol");
      if (querySymbol) {
        const decodedSymbol = decodeURIComponent(querySymbol);
        if (/^(?:TWSE|TPEX):/i.test(decodedSymbol)) {
          keysForSymbol("tw", decodedSymbol.split(":", 2)[1]).forEach((key) => keys.add(key));
        } else {
          const symbol = decodedSymbol.includes(":") ? decodedSymbol.split(":", 2)[1] : decodedSymbol;
          keysForSymbol("us", symbol).forEach((key) => keys.add(key));
        }
      }
      if (pathParts[0] === "symbols" && pathParts[1]) {
        const symbol = pathParts[1].replace(/^(?:NYSE|NASDAQ|AMEX)-/i, "");
        keysForSymbol("us", symbol).forEach((key) => keys.add(key));
      }
    }

    return Array.from(keys);
  }

  function absoluteUrl(baseUrl, value) {
    if (!value) {
      return "";
    }
    try {
      return new URL(value, baseUrl || root.location?.href || "https://willcoming.github.io/stockIndustryReport/").href;
    } catch (_error) {
      return String(value);
    }
  }

  function normalizeRegistry(rawRegistry) {
    const raw = rawRegistry || {};
    const baseUrl = raw.baseUrl || raw.base_url || "";
    const rawStocks = raw.stocks || {};
    const stocks = {};
    const entries = Array.isArray(rawStocks)
      ? rawStocks.map((stock) => [keyFor(stock.market || stock.exchange, stock.symbol), stock])
      : Object.entries(rawStocks);

    for (const [rawKey, rawStock] of entries) {
      const stock = rawStock || {};
      const keyParts = String(rawKey || "").split(":");
      const market = normalizeMarket(stock.market || stock.exchange || keyParts[0], stock.symbol || keyParts[1]);
      const symbol = normalizeSymbol(stock.symbol || keyParts[1] || rawKey, market);
      const url = absoluteUrl(baseUrl, stock.url || stock.latest_url || stock.latestUrl || "");
      if (!symbol || !url) {
        continue;
      }

      const record = {
        market,
        symbol,
        name: compact(stock.name),
        url,
      };
      keysForSymbol(market, symbol).forEach((key) => {
        stocks[key] = record;
      });
      for (const alias of stock.aliases || []) {
        keysForSymbol(market, alias).forEach((key) => {
          stocks[key] = record;
        });
      }
    }

    return { baseUrl, stocks };
  }

  function stockKeysFromGroup(group) {
    const keys = new Set();
    for (const link of Array.from(group.querySelectorAll("a[href]"))) {
      stockKeysFromHref(link.getAttribute("href")).forEach((key) => keys.add(key));
    }
    return Array.from(keys);
  }

  function findStockForGroup(group, registry) {
    const normalized = registry && registry.stocks ? registry : normalizeRegistry(registry);
    for (const key of stockKeysFromGroup(group)) {
      if (normalized.stocks[key]) {
        return normalized.stocks[key];
      }
    }
    return null;
  }

  function createReportLink(doc, stock) {
    const link = doc.createElement("a");
    link.setAttribute("aria-label", `${REPORT_LINK_TITLE} ${stock.symbol}`);
    link.setAttribute("class", REPORT_LINK_CLASS);
    link.setAttribute("href", stock.url);
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("target", "_blank");
    link.setAttribute("title", `${REPORT_LINK_TITLE}${stock.name ? `：${stock.symbol} ${stock.name}` : `：${stock.symbol}`}`);
    link.innerHTML = REPORT_ICON_SVG;
    return link;
  }

  function decorateStockLinkGroups(rootNode, registry) {
    const normalized = registry && registry.stocks ? registry : normalizeRegistry(registry);
    const groups = Array.from(rootNode.querySelectorAll(".stock-link-group"));
    let inserted = 0;

    for (const group of groups) {
      if (group.dataset?.stockIndustryLinked === "1" || group.querySelector(`.${REPORT_LINK_CLASS}`)) {
        continue;
      }
      const stock = findStockForGroup(group, normalized);
      const tradingViewLink = group.querySelector(".stock-tradingview-link");
      if (!stock || !tradingViewLink) {
        continue;
      }
      const doc = group.ownerDocument || rootNode.ownerDocument || root.document;
      if (!doc) {
        continue;
      }
      tradingViewLink.after(createReportLink(doc, stock));
      if (group.dataset) {
        group.dataset.stockIndustryLinked = "1";
      }
      inserted += 1;
    }

    return inserted;
  }

  function loadRegistryScript(doc, url) {
    if (!doc || doc.querySelector('script[data-stock-industry-registry="1"]')) {
      return;
    }
    const script = doc.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    script.dataset.stockIndustryRegistry = "1";
    script.onerror = function () {};
    doc.head.appendChild(script);
  }

  function onDomReady(doc, callback) {
    if (!doc) {
      return;
    }
    if (doc.readyState === "loading") {
      doc.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function init(options) {
    const doc = root.document;
    if (!doc) {
      return;
    }
    const registryScriptUrl = options?.registryScriptUrl || DEFAULT_REGISTRY_SCRIPT_URL;
    const decorateWhenReady = function () {
      if (!root.STOCK_INDUSTRY_REPORTS) {
        return false;
      }
      decorateStockLinkGroups(doc, normalizeRegistry(root.STOCK_INDUSTRY_REPORTS));
      return true;
    };
    const retryWhenRegistryArrives = function (attempt) {
      if (decorateWhenReady() || attempt >= REGISTRY_RETRY_COUNT || typeof root.setTimeout !== "function") {
        return;
      }
      root.setTimeout(function () {
        retryWhenRegistryArrives(attempt + 1);
      }, REGISTRY_RETRY_DELAY_MS);
    };

    onDomReady(doc, decorateWhenReady);
    root.addEventListener?.(READY_EVENT, decorateWhenReady);
    if (!root.STOCK_INDUSTRY_REPORTS) {
      loadRegistryScript(doc, registryScriptUrl);
      retryWhenRegistryArrives(1);
    }
  }

  return {
    DEFAULT_REGISTRY_SCRIPT_URL,
    READY_EVENT,
    REPORT_LINK_CLASS,
    keyFor,
    keysForSymbol,
    stockKeysFromHref,
    normalizeRegistry,
    decorateStockLinkGroups,
    init,
  };
});
