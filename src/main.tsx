import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initTabListener } from "@fremtind/jkl-core";

import "./index.css";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-core/vind.min.css";
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-loader/loader.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";

initTabListener();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
