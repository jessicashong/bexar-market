// Import style.css to include tailwind directives
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_BUSINESS } from '../../utils/mutations';
import Auth from '../../utils/auth';
// import { Button } from "@material-tailwind/react";
//import { ADD_USER, ADD_BUSINESS } from '../utils/mutations';

// TODO: update this with backend
var categories = ['leather', 'woodworking', 'jewelry', 'textiles'];

// TODO: handle any backend logic between users, categories, etc. 
// mutations, queries

// TODO: change input divs to Form (based on Book Search Signup.js)
// TODO: 
function BusinessSignup() {

    // STATE VARIABLES
    const [businessFormData, setBusinessFormData] = useState({ businessName: '', email: '', password: '', confirmPassword: '' });
    const [validated] = useState(false);
    const [addBusiness, { error, data }] = useMutation(ADD_BUSINESS);


    // EVENT HANDLER BLOCK
    // When an form field is changed, update the formState
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setBusinessFormData({
            ...businessFormData,
            [name]: value,
        });
    };

    // HANDLE FORM SUBMIT
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const { data } = await addBusiness({
                variables: { ...businessFormData},
            });
            Auth.login(data.addBusiness.token);
        } catch (err) {
            console.error(err);
        }
        setBusinessFormData({
            businessName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        console.log("FORM SUBMITTED")
    };

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    return (
    <>

    <div className="bg-grey-lighter flex flex-col m-5">
            <div className="container max-w-md mx-auto flex-1 flex flex-row items-center px-2">
                
                
                {/* BUSINESS SIGNUP */}
                <form className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                    <h1 className="mb-8 text-3xl text-center">Create Business Account</h1>
                    <div className='flex flex-col border border-grey-light p-3 rounded mb-4'>
                        {/* Require these inputs!! */}
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="business-name"
                        placeholder="Business Name" 
                        onChange={handleFormChange}/>

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="business@email" 
                        onChange={handleFormChange}/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={handleFormChange}/>
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
                            <select
                                onChange={(e) => setNewStudentMajor(e.target.value)}
                                value={newStudentMajor}>
                                <option>Choose major...</option>
                                {majors.map((major) => (
                                <option key={major} value={major}>
                                    {major}
                                </option>
                                ))}
                            </select>
                    </div>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick ={ () => {
                                handleSubmit();
                                navigateHome();
                            }
                        }
                        >Submit Business Account</button>
                    </div>
                </form>

            </div>
        </div>
    </>
    );
}

export default BusinessSignup;
