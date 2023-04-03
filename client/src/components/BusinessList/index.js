import React from 'react';
import { useQuery } from '@apollo/client';
import Business from '../Business'
import { QUERY_BUSINESSES } from '../../utils/queries';

// TODO: used W22 A18 for reference to get something showing
function BusinessList() {

  const { loading, data } = useQuery(QUERY_BUSINESSES);
  // Chaining to check if data exists otherwise return empty array
  const businesses = data?.businesses || [];

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="my-2">
      <h2>Bexar Market Busniesses</h2>
        <div className="flex-row">
          {businesses.map((business) => (
            <Business
              key={business._id}
              _id={business._id}
              image={business.image}
              businessName={business.businessName}
              description={business.description}
              category={business.category}
            />
          ))}
        </div>
    </div>    
  );
}

export default BusinessList;
