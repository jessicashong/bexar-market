import React from 'react';
import ProductItem from "../ProductItem"
// Import style.css to include tailwind directives
import './style.css';

function ProductList() {

    return (
        <div>
            <h2>Our Products</h2>
            {state.products.length ? (
                <div className="flex-row">
                    {filterproducts().map((product) => (
                        <ProductItem
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
                        <h3>This store has not added any products yet, check back later!</h3>
                    )}
        </div>
    )
}

export default ProductList;