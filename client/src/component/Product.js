import React from 'react'

const Product = (props) => (
    <div className= 'Product'>
        <h1> Product </h1>
        <img src={props.product.image} /> 
        {props.product.name}
        {props.product.description}
        {props.product.price}
    </div>
  )
  
  export default Product