import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="App">
        <h1> Form </h1>
        {this.props.getRequest}
      </div>
    );
  }
}

export default Form;
