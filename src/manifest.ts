import type { Manifest } from 'webextension-polyfill';
import pkg from '../package.json';
import {GLOBAL_OPEN_MODAL_COMMAND} from "../utils/constants";

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  options_ui: {
    page: 'src/pages/options/index.html',
  },
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  "commands": {
    [GLOBAL_OPEN_MODAL_COMMAND]: {
      "suggested_key": {
        "default": "Ctrl+Shift+K",
        "mac": "Command+Shift+K"
      },
      "description": "Open command menu"
    }
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  // rewrite newtab content to custom page
  // chrome_url_overrides: {
  //   newtab: 'src/pages/newtab/index.html',
  // },
  devtools_page: 'src/pages/devtools/index.html',
  // @ts-ignore
  side_panel: {
    default_path: "src/pages/panel/index.html",
  },
  icons: {
    '128': 'icon-128.png',
  },
  permissions: ["activeTab", "sidePanel"],
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      css: ['contentStyle.css'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
};

export default manifest;
