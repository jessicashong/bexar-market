import React from 'react';
import { useQuery } from '@apollo/client';
import Business from '../Business'
import { QUERY_BUSINESSES } from '../../utils/queries';

// Import style.css to include tailwind directives
import './style.css';

// TODO: used W22 A18 for reference to get something showing
function BusinessList() {

  const { data } = useQuery(QUERY_BUSINESSES);
  // Chaining to check if data exists otherwise return empty array
  const businesses = data?.businesses || [];

  return (
    <div>
      <h2>Bexar Market Businesses</h2>
      <div className="flex-row">
        {/* {businesses().map((business) => ( */}
        <Business
          business={businesses}
          title="List of Bexar Market Businesses"
        // key={business._id}
        // _id={business._id}
        // image={business.image}
        // name={business.businessName}
        // category={business.category}
        // description={business.description}
        />
        {/* )) */}
        {/* } */}
      </div>

    </div>
  );
}

export default BusinessList;
