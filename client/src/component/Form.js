import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:4000";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      productName: "",
      productPrice: "",
      editing: false,
      chosenProductId: 0
    };
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (
      prevProps.match.path === "/edit/:id" &&
      prevState.editing &&
      this.props.match.path === "/add"
    ) {
      this.resetState();
    }
  };

  editOne = id => {
    axios({
      method: "GET",
      url: BASE_URL + "/api/inventory/" + id
    }).then(response => {
      this.setState({
        imageUrl: response.data[0].image,
        productName: response.data[0].name,
        productPrice: response.data[0].price,
        chosenProductId: response.data[0].id,
        editing: true
      });
    });
  };

  componentDidMount = () => {
    this.editOne(this.props.match.params.id);
  };

  updateImage = text => {
    this.setState({ imageUrl: text });
  };

  updateName = text => {
    this.setState({ productName: text });
  };

  updatePrice = num => {
    this.setState({ productPrice: num });
  };

  resetState = () => {
    this.setState({
      imageUrl: "",
      productName: "",
      productPrice: "",
      editing: false
    });
  };

  editProduct = id => {
    axios({
      method: "PUT",
      url: BASE_URL + "/api/product/" + id,
      data: {
        name: this.state.productName,
        price: this.state.productPrice,
        imageUrl: this.state.imageUrl
      }
    }).then(this.resetState());
  };

  addProduct = () => {
    axios({
      method: "POST",
      url: BASE_URL + "/api/product",
      data: {
        name: this.state.productName,
        price: this.state.productPrice,
        imageUrl: this.state.imageUrl
      }
    }).then(this.resetState());
  };

  render() {
    return (
      <div>
        {this.state.editing ? (
          <div className="form-container">
            <h3>Product Name: </h3>
            <input
              value={this.state.productName}
              onChange={event => this.updateName(event.target.value)}
            />
            <h3>Price: </h3>
            <input
              value={this.state.productPrice}
              onChange={event => this.updatePrice(event.target.value)}
            />
            <h3>Image URL: </h3>
            <input
              value={this.state.imageUrl}
              onChange={event => this.updateImage(event.target.value)}
            />
            <div className="row-container">
              <Link to="/">
                <button className="red-btn">Cancel</button>
              </Link>
              <Link to="/">
                <button
                  onClick={() => this.editProduct(this.props.match.params.id)}
                  className="red-btn"
                >
                  Save Changes
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="form-container">
            <h3>Product Name: </h3>
            <input
              value={this.state.productName}
              placeholder="product name"
              onChange={event => this.updateName(event.target.value)}
            />
            <h3>Price: </h3>
            <input
              value={this.state.productPrice}
              placeholder="product price"
              onChange={event => this.updatePrice(event.target.value)}
            />
            <h3>Image URL: </h3>
            <input
              value={this.state.imageUrl}
              placeholder="product image URL"
              onChange={event => this.updateImage(event.target.value)}
            />
            <div className="row-container">
              <Link to="/">
                <button className="red-btn">Cancel</button>
              </Link>
              <Link to="/">
                <button onClick={this.addProduct} className="red-btn">
                  Add to inventory
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
