import React from 'react';
import { Link } from "react-router-dom";

function ProductItem(product) {

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
            <img
              alt={name}
              src={`/images/${image}`}
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

export default ProductItem;