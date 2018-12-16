import React, { Component } from "react";
import "./App.css";
import SqlEditor from "./components/sqlEditor";


class App extends Component {
  Header() {
    return (
      <div className="jumbotron">
        <h1>Edit SQL</h1>
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
            <SqlEditor></SqlEditor>
        </div>
        <this.Footer />
      </div>
    );
  }
}

export default App;
