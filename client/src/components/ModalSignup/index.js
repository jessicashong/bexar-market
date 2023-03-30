// Import style.css to include tailwind directives
import './style.css';
import React from 'react';
import { Link, useNavigate  } from "react-router-dom";

// TODO: update modal to include Vendor vs Shopper buttons to redirect to Signup Page

const Modal = ({ isVisible, onClose }) => {

    const [isBusinessApplication, setIsBusinessApplication] = useState(false);
    const [isUserApplication, setIsUserApplication] = useState(false);

    // when user clicks OUTSIDE the modal, then close the modal. the div id is called wrapper.
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    if (!isVisible) return null; 
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'
        /* This is where the id=wrapper allows user to close modal by clicking outside the modal */
        onClick={handleClose}>
            
            <div className='w-[600px] flex flex-col'>
                {/* User may also close the modal by clicking the 'X' on the modal edge */}
                <button className='text-white text-xl place-self-end'
                onClick={()=> onClose() && console.log("closed by clicking X")}
                >
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    <div>
                        <p className='text-xl text-center'>
                            Howdy, y'all!
                        </p>
                        <p className='text-xl text-center'>
                            Click an option to mosey on into Bexar County Market
                        </p>
                    </div>
                    <div className='border border-grey-light w-full p-3 rounded mb-4'>
                        <button
                            type="submit"
                            className='bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 mb-4'
                            // when this button is clicked, set the modal to be true (modal appears)
                            onClick ={ () => {
                                setIsBusinessApplication(true);
                                onClose();
                                }
                            }
                        >Signup as a Business
                        </button>
                        {console.log(`Is a BUSINESS? ${isBusinessApplication}`)}
                        <button
                                type="submit"
                                className="bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                // when this button is clicked, set the modal to be true (modal appears)
                                onClick ={ () => {
                                    setIsUserApplication(true);
                                    onClose();
                                    }
                                }
                            >Signup as a User
                        </button>
                        {console.log(`Is a USER? ${isUserApplication}`)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal