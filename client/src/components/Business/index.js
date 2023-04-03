import React from 'react';
import { Link } from "react-router-dom";

const Business = ({ business }) => {
  console.log("business index:", business)
  if (!business.length) {
    return <h3>Help we have no businesses yet!</h3>
  }

  // TODO: broken business images
  
  return (
    <div>
      {business &&
        business.map((business) => (
          <div key={business._id} className="card px-1 py-1">
            <Link to={`/businesses/${business._id}`}>
              <img
                alt={business.businessName}
                src={`/images/${business.image}`}
              />
              <p>{business.businessName}</p>
            </Link>
            <div>
              <span>Category: {business.category}</span>
              <div>{business.description}</div>
            </div>
          </div>
        ))}
    </div >
  );
}

export default Business;
