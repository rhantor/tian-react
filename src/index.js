import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './assets/css/style.css'
import './assets/css/slicknav.css'
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/responsive.css'
import './assets/fontAwesome/css/all.css'
import './assets/js/cursor'
import './assets/css/magic-mouse.css'
import './assets/css/lightbox.css'
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);