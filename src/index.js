import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root div in index.html and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);