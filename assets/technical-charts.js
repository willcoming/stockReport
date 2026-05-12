(() => {
  const colors = {
    grid: "#dce3de",
    text: "#66736f",
    up: "#0f8f72",
    down: "#b94a3a",
    ema5: "#1f77b4",
    ema20: "#ff9f1c",
    ema60: "#7b61ff",
    ema200: "#6b7280",
    zlsma: "#d23b32",
    rsi: "#156f63",
    macd: "#156f63",
    signal: "#9f6b18",
    histPositiveRising: "#ff3f57",
    histPositiveFalling: "#ffd6dc",
    histNegativeFalling: "#18c7ad",
    histNegativeRising: "#b8eee6",
    trendUpBg: "rgba(185, 74, 58, 0.10)",
    trendDownBg: "rgba(15, 143, 114, 0.10)",
    rsiOverbought: "rgba(185, 74, 58, 0.12)",
    rsiOversold: "rgba(15, 143, 114, 0.12)"
  };

  const pad = { left: 82, right: 16, top: 18, bottom: 28 };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    }[char]));
  }

  function finite(value) {
    return typeof value === "number" && Number.isFinite(value);
  }

  function scale(domainMin, domainMax, rangeMin, rangeMax) {
    const span = domainMax - domainMin || 1;
    return (value) => rangeMax - ((value - domainMin) / span) * (rangeMax - rangeMin);
  }

  function xFor(index, count, width) {
    if (count <= 1) return pad.left;
    return pad.left + index * ((width - pad.left - pad.right) / (count - 1));
  }

  function linePath(rows, key, y, width) {
    let path = "";
    rows.forEach((row, index) => {
      const value = row[key];
      if (!finite(value)) return;
      path += `${path ? "L" : "M"}${xFor(index, rows.length, width).toFixed(2)} ${y(value).toFixed(2)} `;
    });
    return path.trim();
  }

  function grid(width, height, labels) {
    const plotHeight = height - pad.top - pad.bottom;
    return labels.map(({ label, value }, index) => {
      const y = pad.top + plotHeight * index / Math.max(labels.length - 1, 1);
      return `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="${colors.grid}" stroke-width="1"/>
        <text x="${pad.left - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${colors.text}">${escapeHtml(label ?? value)}</text>`;
    }).join("");
  }

  function dateLabels(rows, width, height) {
    if (!rows.length) return "";
    const indexes = [0, Math.floor(rows.length / 2), rows.length - 1];
    return [...new Set(indexes)].map((index) => (
      `<text x="${xFor(index, rows.length, width)}" y="${height - 7}" text-anchor="middle" font-size="11" fill="${colors.text}">${escapeHtml(rows[index].date.slice(5))}</text>`
    )).join("");
  }

  function renderCandles(rows) {
    const width = 920;
    const height = 360;
    const values = [];
    rows.forEach((row) => {
      ["low", "high", "ema5", "ema20", "ema60", "ema200", "zlsma"].forEach((key) => {
        if (finite(row[key])) values.push(row[key]);
      });
    });
    if (!values.length) return "";
    const min = Math.min(...values);
    const max = Math.max(...values);
    const padding = (max - min || max || 1) * 0.06;
    const y = scale(min - padding, max + padding, pad.top, height - pad.bottom);
    const candleWidth = Math.max(3, Math.min(8, (width - pad.left - pad.right) / rows.length * 0.58));
    const yLabels = [max + padding, (max + min) / 2, min - padding].map((value) => ({ label: value.toFixed(2) }));
    const plotTop = pad.top;
    const plotBottom = height - pad.bottom;
    const trendZones = rows.map((row, index) => {
      if (index === 0) return "";
      const prev = rows[index - 1];
      if (![row.ema20, row.zlsma, prev.ema20, prev.zlsma].every(finite)) return "";
      const bothUp = row.ema20 > prev.ema20 && row.zlsma > prev.zlsma;
      const bothDown = row.ema20 < prev.ema20 && row.zlsma < prev.zlsma;
      if (!bothUp && !bothDown) return "";
      const currentX = xFor(index, rows.length, width);
      const previousX = xFor(index - 1, rows.length, width);
      const nextX = index < rows.length - 1 ? xFor(index + 1, rows.length, width) : width - pad.right;
      const xStart = index === 1 ? pad.left : (previousX + currentX) / 2;
      const xEnd = (currentX + nextX) / 2;
      return `<rect x="${xStart.toFixed(2)}" y="${plotTop}" width="${Math.max(0, xEnd - xStart).toFixed(2)}" height="${plotBottom - plotTop}" fill="${bothUp ? colors.trendUpBg : colors.trendDownBg}"/>`;
    }).join("");
    const candles = rows.map((row, index) => {
      if (!["open", "high", "low", "close"].every((key) => finite(row[key]))) return "";
      const x = xFor(index, rows.length, width);
      const up = row.close >= row.open;
      const color = up ? colors.up : colors.down;
      const top = Math.min(y(row.open), y(row.close));
      const bodyHeight = Math.max(1, Math.abs(y(row.open) - y(row.close)));
      return `<line x1="${x}" x2="${x}" y1="${y(row.high)}" y2="${y(row.low)}" stroke="${color}" stroke-width="1"/>
        <rect x="${x - candleWidth / 2}" y="${top}" width="${candleWidth}" height="${bodyHeight}" fill="${color}" rx="1"/>`;
    }).join("");
    const lines = [
      ["ema5", colors.ema5], ["ema20", colors.ema20], ["ema60", colors.ema60],
      ["ema200", colors.ema200], ["zlsma", colors.zlsma]
    ].map(([key, color]) => `<path d="${linePath(rows, key, y, width)}" fill="none" stroke="${color}" stroke-width="${key === "zlsma" ? 2.2 : 1.5}"/>`).join("");
    return `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">${trendZones}${grid(width, height, yLabels)}${candles}${lines}${dateLabels(rows, width, height)}</svg>`;
  }

  function renderRsi(rows) {
    const width = 920;
    const height = 220;
    const y = scale(0, 100, pad.top, height - pad.bottom);
    const overboughtTop = pad.top;
    const overboughtBottom = y(70);
    const oversoldTop = y(30);
    const oversoldBottom = height - pad.bottom;
    const zones = `<rect x="${pad.left}" y="${overboughtTop}" width="${width - pad.left - pad.right}" height="${overboughtBottom - overboughtTop}" fill="${colors.rsiOverbought}"/>
      <rect x="${pad.left}" y="${oversoldTop}" width="${width - pad.left - pad.right}" height="${oversoldBottom - oversoldTop}" fill="${colors.rsiOversold}"/>`;
    const guide = [70, 50, 30].map((value) => (
      `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y(value)}" y2="${y(value)}" stroke="${colors.grid}" stroke-width="1" stroke-dasharray="${value === 50 ? "0" : "4 4"}"/>
       <text x="${pad.left - 8}" y="${y(value) + 4}" text-anchor="end" font-size="11" fill="${colors.text}">${value}</text>`
    )).join("");
    return `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">${zones}${guide}<path d="${linePath(rows, "rsi", y, width)}" fill="none" stroke="${colors.rsi}" stroke-width="2"/>${dateLabels(rows, width, height)}</svg>`;
  }

  function macdHistogramColor(rows, index) {
    const value = rows[index].macd_hist;
    const previous = index > 0 && finite(rows[index - 1].macd_hist) ? rows[index - 1].macd_hist : 0;
    if (value >= 0) {
      return value >= previous ? colors.histPositiveRising : colors.histPositiveFalling;
    }
    return value <= previous ? colors.histNegativeFalling : colors.histNegativeRising;
  }

  function renderMacd(rows) {
    const width = 920;
    const height = 240;
    const values = [];
    rows.forEach((row) => finite(row.macd_hist) && values.push(row.macd_hist));
    if (!values.length) return "";
    const maxAbs = Math.max(...values.map(Math.abs)) || 1;
    const y = scale(-maxAbs * 1.12, maxAbs * 1.12, pad.top, height - pad.bottom);
    const zero = y(0);
    const barWidth = Math.max(2, Math.min(7, (width - pad.left - pad.right) / rows.length * 0.62));
    const bars = rows.map((row, index) => {
      if (!finite(row.macd_hist)) return "";
      const x = xFor(index, rows.length, width) - barWidth / 2;
      const yValue = y(row.macd_hist);
      const top = Math.min(zero, yValue);
      const h = Math.max(1, Math.abs(zero - yValue));
      const color = macdHistogramColor(rows, index);
      return `<rect x="${x}" y="${top}" width="${barWidth}" height="${h}" fill="${color}"/>`;
    }).join("");
    const labels = [{ label: maxAbs.toFixed(2) }, { label: "0" }, { label: (-maxAbs).toFixed(2) }];
    return `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">${grid(width, height, labels)}
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${zero}" y2="${zero}" stroke="${colors.grid}" stroke-width="1"/>
      ${bars}
      ${dateLabels(rows, width, height)}</svg>`;
  }

  function renderSection(section) {
    const dataNode = section.querySelector(".technical-chart-data");
    let payload;
    try {
      payload = JSON.parse(dataNode?.textContent || "{}");
    } catch (error) {
      payload = { status: "error", error: "圖表資料格式錯誤。", rows: [] };
    }
    const rows = Array.isArray(payload.rows) ? payload.rows : [];
    section.querySelectorAll(".technical-chart").forEach((node) => {
      if (payload.status !== "ok" || !rows.length) {
        node.innerHTML = `<div class="chart-empty">${escapeHtml(payload.error || "圖表資料暫時無法載入。")}</div>`;
        return;
      }
      const kind = node.dataset.chartKind;
      const svg = kind === "candles" ? renderCandles(rows) : kind === "rsi" ? renderRsi(rows) : renderMacd(rows);
      node.innerHTML = svg || `<div class="chart-empty">圖表資料暫時無法載入。</div>`;
    });
  }

  document.querySelectorAll(".technical-charts").forEach(renderSection);
})();
