import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// Import style.css to include tailwind directives
import './style.css';

function Profile() {

    function showProfile() {
        if (Auth.loggedIn()) {
            if (/*type === business*/) {
                
            } else {

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