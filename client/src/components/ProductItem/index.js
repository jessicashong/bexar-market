import React from 'react';
import productImage from "../../assets/product.png"

function ProductItem(product) {

  const {
    image,
    productName,
    price,
    description,
    quantity
  } = product;

  return (
    <div className="card px-1 py-1">
      <img
        alt={productName}
        src={productImage}
      />
      <div className='product-info'>
        <p>{productName}</p>
        <div>{description}</div>
        <span>Price: {price}</span>
        <span>{quantity} in stock</span>
      </div>
    </div>
  )
}

export default ProductItem;
