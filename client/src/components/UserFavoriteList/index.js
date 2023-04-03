import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import UserFavoriteItem from "../UserFavoriteItem"

function UserFavoriteList() {

    const { data } = useQuery(QUERY_ME);
    console.log("userfavlistdata:", data)
    let user;
    // Chaining to check if data exists otherwise return empty array
    // const user = data?.user || [];
    // console.log("userfavlist:", user)

    if (data) {
        user = data;
    }
    // console.log("userdata:", user.me.favorites)
    return (
        <div>
            <h2>Your Favorited Products</h2>
            <div className="flex-row">
                {user.me.favorites.map((product) => (
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
        </div>
    );
}

export default UserFavoriteList;