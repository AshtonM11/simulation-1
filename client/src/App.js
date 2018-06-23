import React, { Component } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard";
import Form from "./component/Form";
import Header from "./component/Header";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemForSale: {
        imageUrl: "",
        productName: "",
        price: 0
      },
      productList: [],
      toDelete: null
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: BASE_URL + "/api/product"
    })
      .then(response => {
        console.log("this is response", response);
        this.setState({ inventoryList: response.data });
      })
      .catch(err => console.log("this is error (frontend", err));
  }

  addProduct = () => {
    axios({
      method: "POST",
      url: BASE_URL + "/api/product",
      data: this.state.productList
    });
  };

  delete = () => {
    axios({
      method: "DELETE",
      url: `${BASE_URL}/api/product/${this.state.toDelete}`
    });
  };

  clickCancel = () => {
    console.log("running");
    const reset = {
      imageUrl: "",
      productName: "",
      price: 0
    };
    this.setState({ itemForSale: reset });
  };

  render() {
    return (
      <div className="App">
        <Dashboard product={this.state.productList} />
        <Form getRequest={this.state.componentDidMount} />
        <Header />

        <div style={{ margin: "0 auto", marginTop: 40 }}>
          <button onClick={this.clickCancel}> Cancel </button>
          <button> Add to Inventory </button>
          <button onClick={this.delete}> Delete </button>
          <input
            placeholder="delete product"
            onChange={e => this.setState({ toDelete: e.target.value })}
          />
        </div>

        <div>
          <input
            placeholder="Image URL"
            onChange={e =>
              this.setState({
                itemForSale: {
                  ...this.state.imageUrl,
                  itemForSale: e.target.value
                }
              })
            }
            value={this.state.itemForSale.imageUrl}
          />
          <input
            placeholder="Product Name"
            onChange={e =>
              this.setState({
                itemForSale: {
                  ...this.state.productName,
                  itemForSale: e.target.value
                }
              })
            }
            value={this.state.itemForSale.productName}
          />
          <input
            placeholder="Price"
            onChange={e =>
              this.setState({
                itemForSale: {
                  ...this.state.price,
                  itemForSale: e.target.value
                }
              })
            }
            value={this.state.itemForSale.price}
          />
        </div>
      </div>
    );
  }
}

export default App;
