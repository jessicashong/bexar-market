import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import UserFavoriteItem from "../UserFavoriteItem"

function UserFavoriteList() {

    const { loading, data } = useQuery(QUERY_ME);
    // Chaining to check if data exists otherwise return empty array
    // const user = data?.user || [];
    // console.log("userfavlist:", user)
    
    if (!loading) {
        console.log("userfavlistdata:", data)
    }
    // console.log("userdata:", user.me.favorites)
    return (loading ? <div>Loading data...</div> : (
        <div className='favorite-group'>
            <h2>Your Favorited Products</h2>
            <div className="favorite-group-items">
                {data.me.favorites?.map((favorite, index) => (
                    <UserFavoriteItem
                        key={favorite._id}
                        _id={favorite._id}
                        image={favorite.image}
                        productName={favorite.productName}
                        price={favorite.price}
                        description={favorite.description}
                        quantity={favorite.quantity}
                    />
                ))}
            </div>
        </div>
    ));
}

export default UserFavoriteList;