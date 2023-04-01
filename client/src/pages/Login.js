import React from "react";
import UserLogin from "../components/UserLogin";
import BusinessLogin from "../components/BusinessLogin";

function Login() {


    return (
        <div className="items-center justify-center">
            <UserLogin />
            <BusinessLogin />
        </div>
    )
}

export default Login;


