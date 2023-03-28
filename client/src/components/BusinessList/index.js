import React, { useEffect } from 'react';
import Business from "../Business";

// Import style.css to include tailwind directives
import './style.css';


function BusinessList() {

  

  return (
    <div>
      <h2>Bexar Market Businesss</h2>
        {state.businesses.length ? (
          <div className="flex-row">
            {filterBusinesses().map((business) => (
              <Business
                key={business._id}
                _id={business._id}
                image={business.image}
                name={business.businessName}
                category={business.category}
                description={business.description}
              />
            ))}
      </div>
        ) : (
          <h3>All our businesses have been deleted! Help!</h3>
        )}
      </div>
    )
}

export default BusinessList;
