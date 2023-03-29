import React from 'react';
import BusinessProductItem from "../BusinessProductItem"
// Import style.css to include tailwind directives
import './style.css';

function BusinessProductList() {

    return (
        <div>
            <h2>Your Favorited Items</h2>
            {state.products.length ? (
                <div className="flex-row">
                    {filterfavorites().map((product) => (
                        <BusinessProductItem
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            quantity={product.quantity}
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