import React, { useState } from 'react';
import Auth from "../utils/auth";
import { Link, useParams } from "react-router-dom";
import BusinessProductList from '../components/BusinessProductList';
import UserFavoriteList from '../components/UserFavoriteList';
import BusinessUpdateModal from "../components/BusinessUpdateModal";
import UserUpdateModal from '../components/UserUpdateModal';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Profile() {

    const [showUserModal, setShowUserModal] = useState(false);
    const [showBusinessModal, setShowBusinessModal] = useState(false);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const { userName } = useParams();

    let business = false

    const { loading, data } = useQuery(QUERY_ME)

    const userData = data?.me || [];
    console.log('userData:', userData)

    function showProfile() {
        if (token) {
            if (userData === null) {
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
                        <h2>Hello, username</h2>
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