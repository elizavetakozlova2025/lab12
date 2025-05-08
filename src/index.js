import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './elements/body/Body';
import "./css/reset.css"
import "./css/style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);

