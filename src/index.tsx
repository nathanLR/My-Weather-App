import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './src/App'; //For stackblitz DEV
import App from './App'
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
