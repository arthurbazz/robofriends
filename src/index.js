import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// importing fonts
import './fonts/Odibee_Sans/OdibeeSans-Regular.ttf';
import './fonts/game-of-squids-font/GameOfSquids-1GMVL.ttf';
import './fonts/beautiful-people-font/BeautifulPeoplePersonalUse-dE0g.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
