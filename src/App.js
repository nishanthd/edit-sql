import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  Header() {
    return (
      <div className="jumbotron">
        <h1>Edit SQL</h1>
      </div>);
  }
  SqlBox() {
    return (
      <div>
        <textarea className="form-control" name="sql"></textarea>
      </div>
    )
  }
  Parameters(){
    return (
      <table></table>
    )
  }
  Result(){
    return (
      <textarea className="form-control" name="result"></textarea>
    )
  }
  render() {
    return (
      <div className="App">
        <this.Header></this.Header>
        SQL
        <this.SqlBox></this.SqlBox>
        <div>SQL Parameters</div>
        <this.Parameters></this.Parameters>
        <div>Results</div>
        <this.Result></this.Result>
      </div>
    );
  }

}

export default App;
