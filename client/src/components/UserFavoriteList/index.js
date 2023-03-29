import React from 'react';
import UserFavoriteItem from "../UserFavoriteItem"
// Import style.css to include tailwind directives
import './style.css';

function BusinessProductList() {

    return (
        <div>
            <h2>Your Favorited Products</h2>
            {state.products.length ? (
                <div className="flex-row">
                    {filterproducts().map((product) => (
                        <UserFavoriteItem
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
                        <h3>No products added to your favorites, browse our wares to find products you like!</h3>
                    )}
        </div>
    )
}

export default BusinessProductList;