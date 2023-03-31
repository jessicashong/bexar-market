import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import BusinessProductList from '../components/BusinessProductList';
import UserFavoriteList from '../components/UserFavoriteList';

function Profile() {

    const business = true
    const loggedIn = true

    function showProfile() {
        if (/*Auth.loggedIn()*/loggedIn) {
            if (business === true) {
                return (
                    <div>
                        <h2>Hello, businessName</h2>
                        <div className='updateButtons'>
                            <button>Add Product</button>
                        </div>
                        {/*<BusinessProductList />*/}
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>Hello, username</h2>
                        {/*<UserFavoriteList />*/}
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <p>Please <Link to="/login">log in</Link> to view your profile</p>
                </div>
            )
        }
    }

    return (
        <div>
            {showProfile()}
        </div>
    )

}

export default Profile;