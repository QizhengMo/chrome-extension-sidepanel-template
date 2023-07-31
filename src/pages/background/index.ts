import { GLOBAL_OPEN_MODAL_COMMAND } from "../../../utils/constants";

console.log("background script loaded");
// @ts-ignore
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error: any) => console.error(error));

// Listen for the open modal shortcut
chrome.commands.onCommand.addListener((command) => {
  if (command === GLOBAL_OPEN_MODAL_COMMAND) {
    getCurrentTab().then((response) => {
      if (
        response.url &&
        response.id &&
        !response.url.includes("chrome://") &&
        !response.url.includes("chrome.google.com")
      ) {
        chrome.tabs.sendMessage(response.id, { request: GLOBAL_OPEN_MODAL_COMMAND });
      } else {
        console.log("Invalid position, ignore")
      }
    });
  }
});

// Get the current tab
const getCurrentTab = async () => {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
