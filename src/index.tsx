import React from 'react';
import ReactDOM from 'react-dom/client';
import Panel from "@pages/panel/Panel";
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Panel />
  </React.StrictMode>
);