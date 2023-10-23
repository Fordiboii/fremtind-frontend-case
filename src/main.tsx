import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
