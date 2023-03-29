import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import BusinessProductItem from "../BusinessProductItem"
// Import style.css to include tailwind directives
import './style.css';

function BusinessProductList() {

    return (
        <div>
            <h2>Your Favorited Items</h2>
            {state.favorites.length ? (
                <div className="flex-row">
                    {filterfavorites().map((favorite) => (
                        <BusinessProductItem
                            key={favorite._id}
                            _id={favorite._id}
                            image={favorite.image}
                            name={favorite.businessName}
                            price={favorite.price}
                            description={favorite.description}
                        />
                    ))}
                </div>
                    ) : (
                        <h3>No favorites selected yet, browse what we have and save what you like!</h3>
                    )}
        </div>
    )
}

export default BusinessProductList;