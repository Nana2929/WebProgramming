import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


// https://stackoverflow.com/questions/32979512/react-jsx-how-to-render-text-with-a-single-quote-example-pive-p
class ScoreCard extends React.Component {
  render(){
    let records = this.props.scoreCard.records.map(pair => pair.map(elem => <td>{elem}</td>))
    return (<table>
      <caption> {this.props.scoreCard.name}&apos;s ScoreCard </caption>
      <thead>
        <tr>{this.props.colIndex.map(e => <th>{e}</th>)}</tr>
      </thead>
      <tbody>
      { records.map(oneline => <tr>{oneline}</tr>)}
      </tbody>
      </table>
    ) // a JSX (JavaScript XML)
}}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wow <code>Happy Coding</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ScoreCard;
