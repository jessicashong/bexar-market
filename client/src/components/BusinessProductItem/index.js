import React from 'react';
import { Link } from "react-router-dom";
import productImage from "../../assets/product.png"

function BusinessProductItem(product) {

    const {
        image,
        name,
        _id,
        price,
        description,
        quantity
      } = product;

    return (
      <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img className='card-image'
          alt={name}
          src={`/images/${image}`}
        />
        <p className='card-title'>{name}</p>
      </Link>
      <div>
        <div className='card-desc'>{description}</div>
        <div className='card-price'>Price: {price}</div>
        <div className='card-quant'>In Stock: {quantity}</div>
      </div>
      {/* <button onClick={addToCart}>Add to cart</button> */}
    </div>
  );  
        <div className="card px-1 py-1">
          <Link to={`/products/${_id}`}>
            <img
              alt={name}
              src={productImage}
            />
            <p>{name}</p>
          </Link>
          <div>
            <span>Price: {price}</span>
            <span>{quantity} in stock</span>
            <div>{description}</div>
          </div>
        </div>
    )
}

export default BusinessProductItem;