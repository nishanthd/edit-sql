import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const box = {
  overflowY: "auto",
  maxHeight: "500px",
  minHeight: "300px"
};
class App extends Component {
  Header() {
    return (
      <div className="jumbotron">
        <h1>Edit SQL</h1>
      </div>
    );
  }
  SqlBox() {
    return (
      <div>
        <textarea rows="15" placeHolder="Your sql here..." wrap="true" className="form-control" name="sql" />
      </div>
    );
  }
  Parameters() {
    return (
      <div>
        <table className="table">
          <thead>
            <th>Parameter</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>No parameters found</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  Footer() {
    return (
      <footer className="bd-footer text-muted">
        <div className="container-fluid p-3 p-md-5">Copyright@2018</div>
      </footer>
    );
  }
  render() {
    return (
      <div className="App">
        <this.Header />
        <div className="container">
          <div className="row" style={box}>
            <div className="col-6">
              <this.SqlBox />
            </div>
            <div className="col-6">
              <this.Parameters />
            </div>
          </div>
        </div>
        <this.Footer />
      </div>
    );
  }
}

export default App;
