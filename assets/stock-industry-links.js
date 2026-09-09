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
  const REPORT_LINK_TITLE = "開啟最新研究";
  const researchStatus = root.StockResearchStatus || (typeof require === "function" ? require("./research-status.js") : null);
  const VALID_RATINGS = new Set(["買入", "分批布局", "續抱", "觀察", "減碼/賣出"]);
  let disclosureId = 0;
  const RESPONSIVE_DISCLOSURE_SELECTOR = "details[data-mobile-collapsible]";
  const DESKTOP_DISCLOSURE_MEDIA_QUERY = "(min-width: 768px)";
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
        rating: VALID_RATINGS.has(stock.rating) && stock.rating_status === "verified" ? stock.rating : "",
        rating_status: stock.rating_status === "verified" && VALID_RATINGS.has(stock.rating) ? "verified" : "needs_review",
        rating_issue_labels: Array.isArray(stock.rating_issue_labels) ? stock.rating_issue_labels.map(compact) : [],
        latest_report_date: compact(stock.latest_report_date),
        valid_until: compact(stock.valid_until),
        content_hash: compact(stock.content_hash),
        source_report_sha256: compact(stock.source_report_sha256),
        research_run_id: compact(stock.research_run_id),
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

  function createReportLink(doc, stock, textOnly = false) {
    const link = doc.createElement("a");
    link.setAttribute("aria-label", `${REPORT_LINK_TITLE} ${stock.symbol}`);
    link.setAttribute("class", REPORT_LINK_CLASS);
    link.setAttribute("href", stock.url);
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("target", "_blank");
    link.setAttribute("title", `${REPORT_LINK_TITLE}${stock.name ? `：${stock.symbol} ${stock.name}` : `：${stock.symbol}`}`);
    if (textOnly) {
      link.setAttribute("class", REPORT_LINK_CLASS + " stock-industry-report-text-link");
      link.textContent = "研究";
    } else link.innerHTML = REPORT_ICON_SVG;
    return link;
  }

  function researchPresentation(stock, context = {}, today) {
    const fresh = researchStatus?.freshness(stock.valid_until, stock.latest_report_date, today) || "unknown";
    const notes = [];
    let label = `研究：${stock.rating}`;
    let tone = "neutral";
    if (stock.rating_status !== "verified" || !VALID_RATINGS.has(stock.rating)) {
      label = "評級待核對";
      tone = "warning";
      notes.push(...(stock.rating_issue_labels?.length ? stock.rating_issue_labels : ["尚無可確認的正文與評級一致性資料。"]));
    } else if (fresh !== "valid") {
      label = fresh === "expired" ? "研究已過期" : "有效期未確認";
      tone = "warning";
      notes.push("研究日期或有效期未支持將這份報告視為當日研究依據。");
    } else {
      const category = context.sourceCategory;
      const rating = stock.rating;
      const entry = context.sourceLane === "kol" ? "來源列為現在可買" : "技術出現買點";
      if (category === "ready" && rating === "觀察") notes.push(`${entry}；研究尚未支持新增部位。`);
      else if (category === "ready" && rating === "續抱") notes.push(`${entry}；續抱不等於新增部位。`);
      else if (["ready", "wait"].includes(category) && rating === "減碼/賣出") notes.push("來源訊號與研究風險判斷存在分歧。");
      else if (["wait", "observe"].includes(category) && ["買入", "分批布局"].includes(rating)) notes.push("研究偏多；來源買點仍待確認。");
      else if (category === "exclude" && ["買入", "分批布局"].includes(rating)) notes.push("研究偏多；來源仍有排除條件。");
      if (notes.length) tone = "difference";
    }
    if (researchStatus?.validDate(context.sourceDate) && researchStatus?.validDate(stock.latest_report_date) && stock.latest_report_date > context.sourceDate) {
      notes.push(`研究更新晚於來源報告（${context.sourceDate}），不代表原報告當時引用的結論。`);
    }
    notes.push("有效期僅表示報告標示期限，不表示行情已更新。");
    return { label, tone, notes, freshness: fresh };
  }

  function createResearchDisclosure(doc, stock, group) {
    const wrapper = doc.createElement("span");
    wrapper.setAttribute("class", "stock-research-status");
    const button = doc.createElement("button");
    button.setAttribute("class", "stock-research-status-toggle");
    button.setAttribute("type", "button");
    button.setAttribute("aria-expanded", "false");
    const panel = doc.createElement("span");
    panel.setAttribute("class", "stock-research-status-panel");
    panel.setAttribute("id", `stock-research-info-${++disclosureId}`);
    panel.hidden = true;
    button.setAttribute("aria-controls", panel.getAttribute("id"));
    const summary = doc.createElement("span");
    summary.setAttribute("class", "stock-research-status-notes");
    const dates = doc.createElement("span");
    dates.setAttribute("class", "stock-research-status-dates");
    const update = () => {
      const view = researchPresentation(stock, group.dataset || {});
      button.textContent = view.label + " ▾";
      button.setAttribute("data-tone", view.tone);
      button.setAttribute("aria-label", `${stock.symbol} ${view.label}，展開最新研究說明`);
      dates.textContent = `最新研究日：${stock.latest_report_date || "未標示"}；有效至：${stock.valid_until || "未標示"}（${view.freshness === "expired" ? "已過期" : view.freshness === "valid" ? "標示期限內" : "有效期未確認"}）`;
      summary.textContent = view.notes.join("\n");
    };
    update();
    panel.appendChild(dates);
    panel.appendChild(summary);
    button.addEventListener?.("click", () => {
      update();
      panel.hidden = !panel.hidden;
      button.setAttribute("aria-expanded", String(!panel.hidden));
    });
    wrapper.addEventListener?.("keydown", (event) => {
      if (event.key === "Escape") {
        panel.hidden = true;
        button.setAttribute("aria-expanded", "false");
        button.focus();
      }
    });
    doc.addEventListener?.("stock-research-date:refresh", update);
    wrapper.appendChild(button);
    wrapper.appendChild(panel);
    return wrapper;
  }

  function canLinkFreshResearch(stock, context = {}, today) {
    return Boolean(stock && researchStatus?.validDate(context.researchDate)
      && /^[a-f0-9]{64}$/.test(context.researchSourceHash || "")
      && /^[a-f0-9]{32}$/.test(context.researchRunId || "")
      && stock.research_run_id === context.researchRunId
      && stock.source_report_sha256 === context.researchSourceHash
      && stock.latest_report_date === context.researchDate
      && stock.rating_status === "verified" && VALID_RATINGS.has(stock.rating)
      && researchStatus.freshness(stock.valid_until, stock.latest_report_date, today) === "valid");
  }

  function decorateStockLinkGroups(rootNode, registry, today) {
    const normalized = registry && registry.stocks ? registry : normalizeRegistry(registry);
    const groups = Array.from(rootNode.querySelectorAll(".stock-link-group"));
    let inserted = 0;

    for (const group of groups) {
      const linkOnly = group.dataset?.researchDisplay === "link-only";
      const stock = findStockForGroup(group, normalized);
      const existingLink = group.querySelector(`.${REPORT_LINK_CLASS}`);
      if (linkOnly && !canLinkFreshResearch(stock, group.dataset, today)) {
        existingLink?.remove();
        if (group.dataset) delete group.dataset.stockIndustryLinked;
        continue;
      }
      if (group.dataset?.stockIndustryLinked === "1" || existingLink) {
        continue;
      }
      const tradingViewLink = group.querySelector(".stock-tradingview-link");
      const anchor = tradingViewLink || (linkOnly ? group.querySelector("a[href]") : null);
      if (!stock || !anchor) {
        continue;
      }
      const doc = group.ownerDocument || rootNode.ownerDocument || root.document;
      if (!doc) {
        continue;
      }
      anchor.after(createReportLink(doc, stock, linkOnly));
      if (!linkOnly) group.appendChild(createResearchDisclosure(doc, stock, group));
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

  function syncResponsiveDisclosures(doc, mediaQueryList) {
    if (!doc || !mediaQueryList) {
      return;
    }
    for (const disclosure of Array.from(doc.querySelectorAll(RESPONSIVE_DISCLOSURE_SELECTOR))) {
      disclosure.open = Boolean(mediaQueryList.matches);
    }
  }

  function initResponsiveDisclosures(doc) {
    if (!doc || typeof root.matchMedia !== "function") {
      return;
    }
    const mediaQueryList = root.matchMedia(DESKTOP_DISCLOSURE_MEDIA_QUERY);
    const sync = function () {
      syncResponsiveDisclosures(doc, mediaQueryList);
    };
    onDomReady(doc, sync);
    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", sync);
    } else if (typeof mediaQueryList.addListener === "function") {
      mediaQueryList.addListener(sync);
    }
  }

  function init(options) {
    const doc = root.document;
    if (!doc) {
      return;
    }
    initResponsiveDisclosures(doc);
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
    doc.addEventListener?.("stock-research-date:refresh", decorateWhenReady);
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
    researchPresentation,
    canLinkFreshResearch,
    decorateStockLinkGroups,
    syncResponsiveDisclosures,
    init,
  };
});
