import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Business from '../components/Business';
import ProductList from "../components/ProductList";
import { QUERY_BUSINESSES } from '../utils/queries';

function SingleBusiness() {
    const { businessId } = useParams();

    const [currentBusiness, setCurrentBusiness] = useState({});

    const { loading, data } = useQuery(QUERY_BUSINESSES, {
        // pass URL parameter
        variables: { businessId: businessId },
    });

    const business = data?.thought || {};

    return (
        <div>
            <Business
                business={business._id}
                title="Single Business Info"
            />
            <image>{business.image}</image>
            <div>
                <h2>{business.businessName}</h2>
                <p>{business.description}</p>
            </div>

            <ProductList />
        </div>
    )
}

export default SingleBusiness;