import React, { Component } from "react";
import Product from "./Product";

class Dashboard extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div className="App">
        <h1> Dashboard </h1>
        {this.props.product.map(product => (
          <Product key={product.product_id} product={product} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
