import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ProductItem from "../ProductItem"
import { QUERY_BUSINESS } from '../../utils/queries';
import businessImage from "../../assets/supportSmallBusiness.jpg"

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
        <div className='business'>
            <div className="business-title">
                <div>
                <img
                    alt={business.businessName}
                    src={businessImage}
                />
                </div>
                <div className='business-info'>
                <p>{business.businessName}</p>
                <div>
                    <div className='business-desc'>{business.description}</div>
                    <div>{business.categories}</div>
                </div>
                </div>
                {/* <button onClick={addToCart}>Add to cart</button> */}
            </div>
            <h2 className='products'>Our Products</h2>
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