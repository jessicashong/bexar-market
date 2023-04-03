import React from 'react';
import { Link } from "react-router-dom";
import businessImage from "../../assets/supportSmallBusiness.jpg"

function Business(business) {

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
      <Link to={`/business/${_id}`}>
        <img className='card-image'
          alt={businessName}
          src={businessImage}
        />
        <p className='card-title'>{businessName}</p>
      </Link>
      <div>
        <div className='card-desc'>{description}</div>
        <div className='card-cata'>{categories}</div>
      </div>
      {/* <button onClick={addToCart}>Add to cart</button> */}
    </div>
  );
}

export default Business;
