import React from 'react';
import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import BusinessProductItem from "../BusinessProductItem"
import { QUERY_BUSINESS } from '../../utils/queries';

function BusinessProductList() {

    // Retrieving value of route parameter `:
    const businessId = Auth.getBusiness();
    console.log("buslistbusID:", businessId)

    const { loading, data } = useQuery(QUERY_BUSINESS, {
        variables: { id: businessId },
    });

    const business = data?.business || [];
    // console.log("buslistbusdata:", business)
    
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
                    <BusinessProductItem
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
        // <div>
        //     <h2>Your Products</h2>
        //     {state.products.length ? (
        //         <div className="flex-row">
        //             {filterproducts().map((product) => (
        //                 <BusinessProductItem
        //                     key={product._id}
        //                     _id={product._id}
        //                     image={product.image}
        //                     name={product.name}
        //                     price={product.price}
        //                     description={product.description}
        //                     quantity={product.quantity}
        //                 />
        //             ))}
        //         </div>
        //             ) : (
        //                 <h3>No products added to your store, use the Add Product button to stock your store!</h3>
        //             )}
        // </div>
    );
}

export default BusinessProductList;