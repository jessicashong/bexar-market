import React, { useState } from 'react';
import Auth from "../../utils/auth";
//import { useMutation } from '@apollo/client';
//import { BUSINESS_LOGIN } from '../utils/mutations';

// Import style.css to include tailwind directives
import './style.css';

function BusinessLogin() {

    /*const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(BUSINESS_LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
        });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };*/
    //<form onSubmit={handleFormSubmit}>

    return (
    <div className="container my-1 m-auto px-2 flex flex-col items-center">
      <h2 className='text-2xl'>Business Login</h2>
      <form className='flex flex-col border px-6 py-8 rounded shadow-md items-center'>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            className='block border border-grey-light p-2 rounded mb-4'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            //onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            className='block border border-grey-light p-2 rounded mb-4'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            //onChange={handleChange}
          />
        </div>
        {/*{error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}*/}
        <div className="flex-row flex-end">
          <button 
            type="submit"
            className="bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >Submit
          </button>
        </div>
      </form>
    </div>
    )

};

export default BusinessLogin;