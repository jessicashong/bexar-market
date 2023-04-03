import React from 'react';
import { Link } from "react-router-dom";

// Import style.css to include tailwind directives
import './style.css';

function Business(business) {
  console.log("business:", business)

  const {
    image,
    businessName,
    _id,
    categories,
    description
  } = business;

  // TODO: broken business images
  return (
    <div className="card px-1 py-1">
      <Link to={`/businesses/${_id}`}>
        <img
          alt={businessName}
          src={`/images/${image}`}
        />
        <p>{businessName}</p>
      </Link>
      <div>
        <div>{description}</div>
        <div>{categories}</div>
      </div>
      {/* <button onClick={addToCart}>Add to cart</button> */}
    </div>
  );
}

export default Business;
