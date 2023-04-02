// Import style.css to include tailwind directives
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { Button } from "@material-tailwind/react";
import { useMutation } from '@apollo/client';
import { ADD_BUSINESS } from '../../utils/mutations';
import Auth from '../../utils/auth';

// TODO: update this with backend
var categories = ['leather', 'woodworking', 'jewelry', 'textiles'];

// TODO: handle any backend logic between users, categories, etc. 
// mutations, queries

// TODO: change input divs to Form (based on Book Search Signup.js)
// TODO: 
function BusinessSignup() {

    // STATE VARIABLES
    const [formState, setFormState] = useState({ businessName: '', email: '', password: '', confirmPassword: '' });
    const [addBusiness] = useMutation(ADD_BUSINESS);
    const [isBusiness, setIsBusiness] = useState(true);
    // let isBusiness = true;

    const inputDisable = (userSelect) => {
        if(userSelect) {
            // return document.getElementsByClassName("form-input").disabled = userSelect;
            // return 'cursor-not-allowed';
            // return setIsBusiness(true);
            return "disabled";
        }
    }

    const [place, setPlace] = useState("red");

    const getPlace = () => {
      if (place === "red") setPlace("blue");
      else setPlace("red");
    };
  

    const handleSubmit = async (event) => {
        // event.preventDefault();
        const addBusResponse = await addBusiness ({
            variables: {
                businessName: formState.businessName,
                email: formState.email,
                password: formState.password,
                confirmPassword: formState.confirmPassword,
            },
        });
        const token = addBusResponse.data.addBusiness.token;
        Auth.login(token);
        console.log("FORM SUBMITTED");
        setFormState({
            businessName: '', 
            email: '', 
            password: '', 
            confirmPassword: ''
        })
    };
    

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
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
                
                
                {/* BUSINESS SIGNUP */}
                <form onSubmit={navigateHome} className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                    <h1 className="mb-8 text-3xl text-center">Create Business Account</h1>
                    <div className='flex flex-col border border-grey-light p-3 rounded mb-4'>
                        {/* Require these inputs!! */}
                    <input 
                        type="text"
                        className={`form-input block border border-grey-light w-full p-3 rounded mb-4`}
                        name="businessName"
                        placeholder= {place}
                        onChange={handleFormChange}
                        onClick={() => getPlace()}/>

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="business@email" 
                        disabled={inputDisable(isBusiness)}
                        onChange={handleFormChange}
                        // value enabled
                        />

                    <input 
                        type="password"
                        className={`block border border-grey-light w-full p-3 rounded mb-4`}
                        name="password"
                        placeholder="Password"
                        onChange={handleFormChange} 
                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        onChange={handleFormChange}/>
                    <input 
                        type="file"
                        id="image-file"
                        className="block w-full rounded mb-4"
                        />

                    {/* loops through the categories array to create checkbox */}
                    <div className='block border border-grey-light w-full p-3 rounded mb-4'>
                      {/* TODO: MAKE THIS REQUIRED */}
                        <h3 className="italic text-center mb-4">What categories do you sell?</h3>
                        {categories.map((categoryName, j) => {
                            return (
                                // add key here in case this specific item changes, then jsx knows to only change that    specific element
                                // make sure to use the category id from the typeDef(?)
                                <div key={j}>
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
                            className="bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick ={handleSubmit}
                        >Submit Business Account</button>
                    </div>
                </form>

            </div>
        </div>
    </>
    );
}

export default BusinessSignup;
