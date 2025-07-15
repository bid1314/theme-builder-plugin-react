import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../app/page';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Please ensure your index.html has a <div id="root"></div> element.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
