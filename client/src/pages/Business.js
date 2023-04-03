import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BusinessUpdateModal from "../components/BusinessUpdateModal";

import Business from '../components/Business';
import ProductList from "../components/ProductList";
import { QUERY_BUSINESSES } from '../utils/queries';

function SingleBusiness() {
    const { businessId } = useParams();

    const [showBusinessModal, setShowBusinessModal] = useState(false);
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
            <button
                type="button"
                className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={ () => {
                    setShowBusinessModal(true);
                    }
                }
                >
                Click to Update Credentials
            </button>
            <BusinessUpdateModal
                isVisible={showBusinessModal}
                onClose={() => {
                    setShowBusinessModal(false);
                    }
                  }
            />
        </div>
    )
}

export default SingleBusiness;