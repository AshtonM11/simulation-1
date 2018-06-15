import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard'
import Form from './component/Form'
import Header from './component/Header'


class App extends Component {
  constructor(){
    super()
    this.state = {
      item: {
        imageUrl: '',
        productName: '',
        price: 0,
      }

    }
  }

  



  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Form/>
        <Header/>

        <div style={{ margin: '0 auto', marginTop: 40}}>
          <button> Cancel</button>
          <button> Add to Inventory </button>
        </div>

        <div>
        <input placeholder="Image URL" onChange={(e) => this.setState({ item: {...this.state.imageUrl, item: e.target.value} })} />
        <input placeholder="Product Name" onChange={(e) => this.setState({ item: {...this.state.productName, item: e.target.value} })} />
        <input placeholder="Price" onChange={(e) => this.setState({ item: {...this.state.price, item: e.target.value} })} />
        </div>

      </div>
    );
  }
}

export default App;
