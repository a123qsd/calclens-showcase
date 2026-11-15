(() => {
  // Keep published fragment links working after the detailed content moved.
  const fragment = window.location.hash;
  if (!fragment) return;
  const english = document.documentElement.lang === "en";
  const history = english ? "history-en.html" : "history.html";
  const guide = english ? "guide-en.html" : "guide.html";
  let id;
  try { id = decodeURIComponent(fragment.slice(1)); } catch { return; }
  const historyIds = /^(?:history-(?:macos|windows)|history-tab-(?:macos|windows)|(?:macos|windows)-v[0-9-]+|download-notes)$/;
  const guideIds = new Set(["project", "features", "gaussian-advanced", "geometry-formats", "external-inputs", "checkpoint-tools", "auto-recommend", "molecule-drawing"]);
  if (historyIds.test(id)) window.location.replace(history + fragment);
  else if (guideIds.has(id)) window.location.replace(guide + fragment);
})();
