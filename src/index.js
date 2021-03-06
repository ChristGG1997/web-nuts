import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import Nav from './components/Navbar/nav';
import Point from './components/IndexPoint/point';
import reportWebVitals from './reportWebVitals';
import Copyright from './components/Footer/Copyright'


// el point del index lo cambie en la pagina de index para que no se viera en las demas pages

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Copyright />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
