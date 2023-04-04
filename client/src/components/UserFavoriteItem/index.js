import React from 'react';
import { Link } from "react-router-dom";
import { removeFaveId } from '../../utils/helpers';
import { DELETE_FAVORITE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';


function UserFavoriteItem(product) {

    const {
        image,
        name,
        _id,
        price,
        description,
        quantity
      } = product;

      const { loading, data } = useQuery(QUERY_ME);
      const [deleteFavorite, { error }] = useMutation(DELETE_FAVORITE, {
        update(cache, { data: { deleteFavorite } }) {
            try{
                cache.writeQuery({
                query: QUERY_ME,
                data: { me: deleteFavorite},
                });
            } catch(err) {
                console.error(err);
            }
        },
    })

    const handleRemoveFave = async () => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      console.log('productId:', _id)
      if (!token) {
      return false;
      }

      try {
      const { data } = await deleteFavorite({
          variables: { productId: _id },
      });
      // upon success, remove book's id from localStorage
      removeFaveId(_id);
      } catch (err) {
      console.error(err);
      }
  };

    return (
        <div className="card px-1 py-1">
          <Link to={`/products/${_id}`}>
            <img
              alt={name}
              src={`/images/${image}`}
            />
            <p>{name}</p>
          </Link>
          <div>
            <span>Price: {price}</span>
            <span>{quantity} in stock</span>
            <div>{description}</div>
            <button
            type="button"
            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={ () => {
              handleRemoveFave(_id);
              }
            }
        >
          Delete Favorite
        </button>
          </div>
        </div>
    )
}

export default UserFavoriteItem;