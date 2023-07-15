function init() {
  console.log("background script loaded");
  // allow action icon to open sidePanel
  // @ts-ignore
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
}
init();

