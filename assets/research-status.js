(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.StockResearchStatus = api;
  if (root.document) {
    const refresh = () => api.refreshFreshness(root.document);
    if (root.document.readyState === "loading") root.document.addEventListener("DOMContentLoaded", refresh);
    else refresh();
    // A page left open overnight must not keep yesterday's validity label.
    root.setInterval?.(refresh, 60000);
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";
  function taipeiDate(now = new Date()) {
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
    const part = (type) => parts.find((item) => item.type === type).value;
    return `${part("year")}-${part("month")}-${part("day")}`;
  }
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }
  function freshness(validUntil, researchDate, today = taipeiDate()) {
    if (!validDate(validUntil) || !validDate(researchDate) || researchDate > today || validUntil < researchDate) return "unknown";
    return validUntil < today ? "expired" : "valid";
  }
  function freshnessLabel(status, validUntil) {
    return status === "expired" ? `已過期（有效至 ${validUntil}）` : status === "valid" ? `有效至 ${validUntil}` : "有效期未確認";
  }
  function refreshFreshness(doc, today = taipeiDate()) {
    for (const node of doc.querySelectorAll(".research-freshness")) {
      const state = freshness(node.dataset.validUntil, node.dataset.researchDate, today);
      node.dataset.freshness = state;
      node.textContent = freshnessLabel(state, node.dataset.validUntil);
    }
    doc.dispatchEvent?.(new Event("stock-research-date:refresh"));
  }
  return { taipeiDate, freshness, freshnessLabel, validDate, refreshFreshness };
});
