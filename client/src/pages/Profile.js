import React, { useState } from 'react';
import Auth from "../utils/auth";
import { Link, useParams } from "react-router-dom";
import BusinessProductList from '../components/BusinessProductList';
import UserFavoriteList from '../components/UserFavoriteList';
import BusinessUpdateModal from "../components/BusinessUpdateModal";
import UserUpdateModal from '../components/UserUpdateModal';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_BUSINESS } from '../utils/queries';

function Profile() {

    const [showUserModal, setShowUserModal] = useState(false);
    const [showBusinessModal, setShowBusinessModal] = useState(false);

    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    const bizId = Auth.getBusiness();

    let { loading, data } = useQuery(
        bizId ? QUERY_BUSINESS : QUERY_ME, {
        variables: bizId ? { id: bizId } : {}
    });

    if(!loading) {
        console.log(data);
    }
    const userData = data?.me || [];
    console.log('userData:', userData);

    // function showProfile() {
    //     return 'Test';
    //     if (token) {
    //         if (userData.userName === undefined) {
    //             return (
    //                 <div>
    //                     <h2>Hello</h2>
    //                     {/*<BusinessProductList />*/}
    //                     <div>
    //                     <button
    //                         type="button"
    //                         className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
    //                         onClick={ () => {
    //                             setShowBusinessModal(true);
    //                             }
    //                         }
    //                     >
    //                         Click to Update Credentials
    //                     </button>
    //                     <BusinessUpdateModal
    //                         isVisible={showBusinessModal}
    //                         onClose={() => {
    //                         setShowBusinessModal(false);
    //                             }
    //                         }
    //                     />
    //                     </div>
    //                     <div>
    //                         <button>Add Product</button>
    //                     </div>
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div className='user-profile'>
    //                     <h2>Hello, {userData.userName}!</h2>
    //                     <p>Favorites list coming soon!</p>
    //                     <div>
    //                     <button
    //                         type="button"
    //                         className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
    //                         onClick={ () => {
    //                             setShowUserModal(true);
    //                             }
    //                         }   
    //                     >
    //                         Click to Update Credentials
    //                     </button>
    //                     <UserUpdateModal
    //                         isVisible={showUserModal}
    //                         onClose={() => {
    //                         setShowUserModal(false);
    //                             }
    //                         }
    //                     />
    //                     </div>
    //                 </div>
    //             )
    //         }
    //     } else {
    //         return (
    //             <div>
    //                 <p>Please <Link to="/login">log in</Link> to view your profile</p>
    //             </div>
    //         )
    //     }
    // }
    // { this.state.loadingPage
    //     ? <span className="sr-only">Loading... Registered Devices</span>
    //     : <>
    //         {this.state.someBoolean
    //           ? <div>some title</div>
    //           : null
    //         }
    //         <div>body</div>
    //       </>
    //   }
    return loading ? <div>I am loading, yay</div> : <div>
        {
            bizId ? 
            <>
                <div>
                        <h2>Hello {data.business.businessName}</h2>
                        <BusinessProductList />
                        <div>
                        {/* <button
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
                        /> */}
                        </div>
                        <div>
                            <button>Add Product</button>
                        </div>
                    </div>
            </> 
        : <>
        <div className='user-profile'>
        <h2>Hello, {userData.userName}!</h2>
        {/* <p>Favorites list coming soon!</p> */}
        <UserFavoriteList />
        <div>
        {/* <button
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
        /> */}
        </div>
    </div></>}
    </div>
        
}

export default Profile;