import React from 'react';
import BusinessProductItem from "../BusinessProductItem"
// Import style.css to include tailwind directives
import './style.css';

function BusinessProductList() {

    return (
        <div>
            <h2>Your Products</h2>
            {state.products.length ? (
                <div className="flex-row">
                    {filterproducts().map((product) => (
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
                        <h3>No products added to your store, use the Add Product button to stock your store!</h3>
                    )}
        </div>
    )
}

export default BusinessProductList;