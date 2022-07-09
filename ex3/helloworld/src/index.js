import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ScoreCard from './App';


const colIndex = ["Subject", "Score"];
const scoreCard = {
  name: "Sherry",
  records:[["Math", 80],
  ["English", 100],
  ["C++ Programming", 91]
  ]
};
const table_to_render = <ScoreCard scoreCard = {scoreCard}
colIndex = {colIndex}/>;
ReactDOM.render(table_to_render,
                document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );
// function tick() { const element = (
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>It is
// {new Date().toLocaleTimeString()}.</h2></div>);
// ReactDOM.render(element,
//   document.getElementById('root'));}
// setInterval(tick, 1000);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
