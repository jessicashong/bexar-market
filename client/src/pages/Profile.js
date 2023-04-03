import React, { useState } from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import BusinessProductList from '../components/BusinessProductList';
import UserFavoriteList from '../components/UserFavoriteList';
import BusinessUpdateModal from "../components/BusinessUpdateModal";
import UserUpdateModal from '../components/UserUpdateModal';

function Profile() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const [showUserModal, setShowUserModal] = useState(false);
    console.log(token);
    function showProfile() {
        if (token) {
            if (business === true) {
                return (
                    <div>
                        <h2>Hello, businessName</h2>
                        {/*<BusinessProductList />*/}
                        <div>
                        <button
                            type="button"
                            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick={ () => {
                                setShowBusinessModal(true);
                                }
                            }
                        >
                            Click to Update Credentials
                        </button>
                        <BusinessUpdateModal
                            isVisible={showBusinessModal}
                            onClose={() => {
                            setShowBusinessModal(false);
                                }
                            }
                        />
                        </div>
                        <div>
                            <button>Add Product</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>Hello, userName</h2>
                        {/*<UserFavoriteList />*/}
                        <div></div>
                        <button
                            type="button"
                            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick={ () => {
                                setShowUserModal(true);
                                }
                            }   
                        >
                            Click to Update Credentials
                        </button>
                        <UserUpdateModal
                            isVisible={showUserModal}
                            onClose={() => {
                            setShowUserModal(false);
                                }
                            }
                        />
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