import React, { Component } from "react";

class Parameters extends Component {
  
    handleOnchange(){
        
    }
    
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.value.map(p => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td><input onChange={this.handleOnchange} value={p.value}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Parameters;
