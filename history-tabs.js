(() => {
  const historySection = document.getElementById("history");
  if (!historySection) return;

  const tabList = historySection.querySelector("[data-history-tabs]");
  const tabs = Array.from(historySection.querySelectorAll("[data-history-tab]"));
  const panels = Array.from(historySection.querySelectorAll("[data-history-panel]"));
  if (!tabList || tabs.length !== panels.length || !tabs.length) return;

  const localeLinks = Array.from(document.querySelectorAll(".locale a"));
  const localeTargets = new Map(localeLinks.map((link) => [link, link.getAttribute("href")]));

  function targetFromHash() {
    try {
      return document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    } catch {
      return null;
    }
  }

  function panelFromHash() {
    const target = targetFromHash();
    const panel = target?.closest("[data-history-panel]");
    if (panel && panels.includes(panel)) return panel;
    return tabs.includes(target) ? document.getElementById(target.getAttribute("aria-controls")) : null;
  }

  function updateLocaleLinks() {
    const fragment = targetFromHash() ? window.location.hash : "";
    localeLinks.forEach((link) => {
      link.setAttribute("href", localeTargets.get(link) + fragment);
    });
  }

  function revealHashTarget() {
    const target = targetFromHash();
    if (!target) return;
    let parent = target.parentElement;
    while (parent) {
      if (parent.tagName === "DETAILS") parent.open = true;
      parent = parent.parentElement;
    }
    // A deep link can belong to a panel that was hidden before activation.
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }

  function activate(tab, { focus = false, updateHash = false } = {}) {
    const panelId = tab.getAttribute("aria-controls");
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== panelId;
    });
    if (focus) tab.focus();
    if (updateHash && window.location.hash !== "#" + panelId) {
      window.history.pushState(null, "", "#" + panelId);
    }
    updateLocaleLinks();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab, { updateHash: true }));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next], { focus: true, updateHash: true });
    });
  });

  function followHash() {
    const panel = panelFromHash();
    if (panel) activate(tabs.find((tab) => tab.getAttribute("aria-controls") === panel.id));
    else if (!window.location.hash || window.location.hash === "#history") activate(tabs[0]);
    updateLocaleLinks();
    revealHashTarget();
  }

  const initialPanel = panelFromHash();
  activate(initialPanel ? tabs.find((tab) => tab.getAttribute("aria-controls") === initialPanel.id) : tabs[0]);
  tabList.hidden = false;
  revealHashTarget();
  window.addEventListener("hashchange", followHash);
  window.addEventListener("popstate", followHash);
})();
