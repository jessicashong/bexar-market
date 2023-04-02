// Import style.css to include tailwind directives
import './style.css';
import React, { useState } from 'react';
// import { Button } from "@material-tailwind/react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


var categories = ['leather', 'woodworking', 'jewelry', 'textiles'];


function UserSignup({ isBusiness }) {

    // STATE VARIABLES
    const [formState, setFormState] = useState({ userName: '', email: '', password: '', confirmPassword: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (event) => {
        // event.preventDefault(event);
        const addUserResponse = await addUser ({
            variables: {
                userName: formState.userName,
                email: formState.email,
                password: formState.password,
                confirmPassword: formState.confirmPassword,
            },
        });
        const token = addUserResponse.data.addUser.token;
        Auth.login(token);
        console.log("FORM SUBMITTED")
    }

    // EVENT HANDLER BLOCK
    // When an form field is changed, update the formState
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        };

    return (
        <>
            <div className="bg-grey-lighter flex flex-col m-5">
                <div className="container max-w-md mx-auto flex-1 flex flex-row items-center px-2">

                    {/* USER SIGNUP */}
                    <form className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                        <h1 className="mb-8 text-3xl text-center">Create User Account</h1>
                        <div className='flex flex-col border border-grey-light p-3 rounded mb-9'>
                            {/* Require these inputs!! */}
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="userName"
                                placeholder="Username" 
                                onChange={handleFormChange}
                            />

                            <input 
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="user@email" 
                                onChange={handleFormChange}
                            />

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" 
                                onChange={handleFormChange}
                            />
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirmPassword"
                                placeholder="Confirm Password" 
                                onChange={handleFormChange}
                            />

                            {/* loops through the categories array to create checkbox */}
                            <div className='block border border-grey-light w-full p-3 rounded mb-4'>
                                <h3 className="italic mb-4">Optional: What categories are you interested in?</h3>
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
                                                htmlFor="checkboxDefault">
                                                {categoryName}
                                            </label>
                                        </div> 
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div>
                            <button
                                type="button"
                                className="bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                onClick ={handleSubmit}>
                                    Submit User Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserSignup;
