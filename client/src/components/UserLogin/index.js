import React, { useState } from 'react';
import Auth from "../../utils/auth";
//import { useMutation } from '@apollo/client';
//import { USER_LOGIN } from '../utils/mutations';

// Import style.css to include tailwind directives
import './style.css';

function UserLogin() {

    /*const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(USER_LOGIN);

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
    <div className="container my-1">
      <h2>User Login</h2>
      <form >
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )

};

export default UserLogin;