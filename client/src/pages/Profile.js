import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import BusinessProductList from '../components/BusinessProductList';
// Import style.css to include tailwind directives
import './style.css';

function Profile() {

    function showProfile() {
        if (Auth.loggedIn()) {
            if (type === business) {
                return (
                    <div>
                        <h2>Hello, {businessName}</h2>
                        <button>Update Business Name</button>
                        <button>Update Password</button>
                        <button>Update Business Image</button>
                        <button>Update Business Description</button>
                        <button>Add Product</button>
                        <BusinessProductList />
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>Hello, {username}</h2>
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