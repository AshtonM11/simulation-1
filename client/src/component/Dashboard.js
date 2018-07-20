import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventoryList: [],
      chosenProduct: {}
    };
  }

  getProducts = () => {
    axios({
      method: "GET",
      url: BASE_URL + "/api/inventory"
    }).then(response => {
      this.setState({ inventoryList: response.data });
    });
  };

  componentDidMount = () => {
    this.getProducts();
  };

  componentDidUpdate = () => {
    this.getProducts();
  };

  deleteProduct = id => {
    axios({
      method: "DELETE",
      url: BASE_URL + "/api/product/" + id
    }).then(response => {
      this.getProducts();
    });
  };

  render() {
    return (
      <div className="dash-container">
        <Product
          inventoryList={this.state.inventoryList}
          deleteProduct={this.deleteProduct}
          productChosen={this.state.productChosen}
        />
      </div>
    );
  }
}
