// Import style.css to include tailwind directives
import './style.css';

import React, { useState } from 'react';
// import { Button } from "@material-tailwind/react";
import Modal from "../ModalSignup/index.js";

// TODO: update this with backend
var categories = ['leather', 'woodworking', 'jewelry', 'textiles'];

// TODO: handle any backend logic between users, categories, etc. 

// TODO: handle checkbox event
// function Checkbox() { 
//   const handleChange = () => { 
//     console.log('The checkbox was toggled'); 
//   }; 
  
//   return ( 
//     <div>  
//       <input type="checkbox" onChange={handleChange}
//       />
//     </div> 
//   ); 
// }; 

// TODO: change input divs to Form (based on Book Search Signup.js)
// TODO: 
function Signup() {

    // create state to show modal and to update modal; initialize to false (modal will not show until button is clicked)
    const [showModal, setShowModal] = useState(false);

    return (
    <>

    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <div className='flex flex-col border border-grey-light w-full p-3 rounded mb-4'>
                        {/* change all these inputs to Form.Group ; see booksearch SignupForm.js */}
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    {/* loops through the categories array to create checkbox */}
                    <div className='block border border-grey-light w-full p-3 rounded mb-4'>
                        <h3 className="italic mb-4">What categories are you interested in?</h3>
                        {categories.map((categoryName, i) => {
                            return (
                                // add key here in case this specific item changes, then jsx knows to only change that    specific element
                                // make sure to use the category id from the typeDef(?)
                                <div key={i}>
                                    <input
                                    className=" flex-row dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault" 
                                    
                                    />
                                    <label
                                    className="flex-row pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                    
                                    >
                                    {categoryName}
                                    </label>
                                </div> 
                            );
                        })}
                    </div>
                    </div>
                    
                    <div>
                    <button
                        type="submit"
                        className="bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    <button
                        type="submit"
                        className="bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        // when this button is clicked, set the modal to be true (modal appears)
                        onClick ={ () => setShowModal(true)}
                    >Show Modal</button>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        {/* set isVisible to the showModal state and set showModal=false when modal is closed */}
        <Modal isVisible ={showModal} onClose={() => setShowModal(false)}/>
    </>
    );
}

export default Signup;
