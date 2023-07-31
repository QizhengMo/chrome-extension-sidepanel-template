import { createRoot } from "react-dom/client";
import React, { createContext } from "react";
import { ContentApp } from "@pages/content/ContentApp";
import { GLOBAL_OPEN_MODAL_COMMAND } from "../../../utils/constants";
import './style.css'

const div = document.createElement("div");
document.body.appendChild(div);

const root = createRoot(div);
export const ModalStateContext = createContext(false);
let isOpen = true;

try {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.request == GLOBAL_OPEN_MODAL_COMMAND) {
      isOpen = !isOpen;
    }
  });
} catch (e) {
  console.log("NOT IN Chrome ENV")
}


root.render(
  <ModalStateContext.Provider value={isOpen}>
    <ContentApp />
  </ModalStateContext.Provider>,
);
