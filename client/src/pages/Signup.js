// Import style.css to include tailwind directives
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BusinessSignup from '../components/BusinessSignup';
import UserSignup from '../components/UserSignup';
// import { Button } from "@material-tailwind/react";
//import { useMutation } from '@apollo/client';
// import { ADD_USER, ADD_BUSINESS } from '../utils/mutations';


function Signup({ isBusiness }) {

    return (

        <>
        <div className='container m-auto' >
            <div className="mx-auto flex-1 flex flex-row items-center justify-center text-grey-dark m-6 bg-white py-4 rounded shadow-md text-black w-full text-2xl border">
                    Already have an account?  
                    <a className=" mx-4 hover:underline" href="../login/">
                        Log in
                    </a>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div >
                    {console.log("isBusiness is set to: " + isBusiness)}
                    {isBusiness === true ? <BusinessSignup/> : <UserSignup/>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;
