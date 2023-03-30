import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Modal from "../ModalSignup/index.js"
// Import style.css to include tailwind directives
import './style.css';

function Nav() {

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
            <li> | </li>
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
            <li> | </li>
            <li className="mx-1">
                {/* // TODO: if person clicks USER or BUSINESS, setShowModal(false) && link to signup
                // else, simply setShowModal(false)
                // when modal is closed, go to signup page */}
                <Link to="/modalSignup"
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
                }>
                </Modal>
            </li>
          </ul>
        );
      }
    }
  
    return (
      <header className="flex-row px-1">
        <h1>
          <Link to="/">
            Home
          </Link>
        </h1>
        <h2>
          <Link to="/about">
            About
          </Link>
        </h2>
        <h2>
          <Link to="/search">
            Search
          </Link>
        </h2>
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  export default Nav;