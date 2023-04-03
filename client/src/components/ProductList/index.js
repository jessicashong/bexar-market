import React from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from "../ProductItem"
import { QUERY_PRODUCT } from '../../utils/queries';

function ProductList() {

    const { loading, data } = useQuery(QUERY_PRODUCT);

    console.log('productlist')

    return (
        <div></div>
        // <div>
        //     <h2>Our Products</h2>
        //     {products.length ? (
        //         <div className="flex-row">
        //             {filterproducts().map((product) => (
        //                 <ProductItem
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
        //                 <h3>This store has not added any products yet, check back later!</h3>
        //             )}
        // </div>
    )
}

export default ProductList;