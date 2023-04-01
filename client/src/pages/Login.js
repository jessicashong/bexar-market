import React from "react";
import UserLogin from "../components/UserLogin";
import BusinessLogin from "../components/BusinessLogin";

function Login() {


    return (
        <>
        <div className='container m-auto' >
        <div className="mx-auto flex-1 flex flex-row items-center justify-center text-grey-dark m-6 bg-white py-4 rounded shadow-md text-black w-full text-2xl border">
                    Don't have an account?  
                    <a className=" mx-4 hover:underline" href="../signup/">
                        Signup
                    </a>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div>
                    <UserLogin />
                </div>
                <div>
                    <BusinessLogin />
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;


