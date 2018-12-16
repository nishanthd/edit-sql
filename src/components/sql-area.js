import React, { Component } from "react";

class SqlArea extends Component {

  render() {
    return(<div>
      <textarea
        rows="15"
        placeholder="Your sql here..."
        wrap="true"
        className="form-control"
        name="sql"
      />
    </div>);
  }
}
export default SqlArea;
