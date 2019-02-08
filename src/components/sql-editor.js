import React, { Component } from "react";
import Parameters from './parameters';
import SqlArea from './sql-area';

const box = {
  overflowY: "auto",
  maxHeight: "500px",
  minHeight: "300px"
};
class SqlEditor extends Component {
  state = {
    sql: "",
    parameters: []
  };
  handlePaste = event => {
    console.log("pasted");
    event.clipboardData.items[0].getAsString(text => {
      const sql = text;

      let request = {
        query: sql
      };
      let response;
      var self = this;
      fetch("http://127.0.0.1:5000/sql/parse", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          response = data;
          self.setState({
            parameters:response.parameters
          });
        });
    });
  };

  render() {
    return (
      <div className="row" style={box}>
        <div className="col-6" onPaste={this.handlePaste}>
          <SqlArea/>
        </div>
        <div className="col-6">
          <Parameters value={this.state.parameters}/>
        </div>
      </div>
    );
  }
}

export default SqlEditor;
