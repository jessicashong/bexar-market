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
      <img className='product-image'
        alt={productName}
        src={productImage}
      />
      <div className='product-info'>
        <p>{productName}</p>
        <div>{description}</div>
        <span>Price: {price}</span>
        <span>{quantity} in stock</span>

        <button
            type="button"
            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  )
}

export default ProductItem;
