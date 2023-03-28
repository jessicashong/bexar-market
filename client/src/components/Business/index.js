import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// Import style.css to include tailwind directives
import './style.css';

function Business(business) {

    const {
        image,
        name,
        _id,
        catagory,
        description
      } = business;

    return (
        <div className="card px-1 py-1">
          <Link to={`/businesses/${_id}`}>
            <img
              alt={name}
              src={`/images/${image}`}
            />
            <p>{name}</p>
          </Link>
          <div>
            <span>Catagory: {catagory}</span>
            <div>{description}</div>
          </div>
        </div>
      );
}

export default Business;