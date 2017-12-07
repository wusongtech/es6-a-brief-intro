import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getGrades} from './demo/grades';
import FOOFN, {bar, baz as BAZ} from './demo/grades';
import * as gradeService from './demo/grades';

getGrades().filter(person => person.grade >= 85)
//.forEach(person => console.info(person.name));
    .forEach(({name}) => console.info(name));

FOOFN();
bar();
BAZ();

console.info('gradeService', gradeService);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
