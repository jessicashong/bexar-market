import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Modal from "../ModalSignup/index.js"
import logo from "../../assets/logo512.png"

function Nav({ isBusiness, setIsBusiness }) {

  // create state for Modal
const [showModal, setShowModal] = useState(false);

    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li className="mx-3"> | </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/login">
                Login
              </Link>
            </li>
            <li className="mx-3"> | </li>
            <li className="mx-1">
                {/* // TODO: if person clicks USER or BUSINESS, setShowModal(false) && link to signup
                // else, simply setShowModal(false)
                // when modal is closed, go to signup page */}
                <Link to="/"
                onClick={ () => {
                  setShowModal(true)
                  }
                }>
                  Signup
                </Link>
                {/* Insert Signup Modal here that allows user to select whether they signup as a business or a user */}
                <Modal 
                  isVisible ={showModal} 
                  onClose={() => {
                    setShowModal(false);
                    }
                  }
                  isBusiness={isBusiness}
                  setIsBusiness={setIsBusiness}
                  >
                </Modal>
            </li>
          </ul>
        );
      }
    }
  
    return (
      <header className="header">
        <div className='left-nav'>
        <h1>
          <Link to="/">
            <img className='logo' src={logo} alt="Bexar Market Logo"></img>
          </Link>
        </h1>
        <h2>
          <Link to="/about" className='nav-option'>
            About
          </Link>
        </h2>
        {/* search bar */}
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1" />
                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  export default Nav;