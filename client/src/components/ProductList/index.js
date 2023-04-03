import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ProductItem from "../ProductItem"
import { QUERY_BUSINESS } from '../../utils/queries';

//TODO: show products only for current business
const ProductList = () => {
    // Retrieving value of route parameter `:
    const businessId = useParams();
    // console.log("prodlistbusID:", businessId.id)

    const { loading, data } = useQuery(QUERY_BUSINESS, {
        variables: { id: businessId.id },
    });

    const business = data?.business || [];
    // console.log("prodListbusdata:", business)
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="card px-1 py-1">
                <img
                    alt={business.businessName}
                    src={`/images/${business.image}`}
                />
                <p>{business.businessName}</p>
                <div>
                    <div>{business.description}</div>
                    <div>{business.categories}</div>
                </div>
                {/* <button onClick={addToCart}>Add to cart</button> */}
            </div>
            <h2>Our Products</h2>
            <div className="flex-row">
                {business.products.map((product) => (
                    <ProductItem
                        key={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;