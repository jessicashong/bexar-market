// Import style.css to include tailwind directives
import './style.css';
import React from 'react';

// TODO: update modal to include Vendor vs Shopper buttons to redirect to Signup Page

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null; 

    // when user clicks OUTSIDE the modal, then close the modal. the div id is called wrapper.
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'
        /* This is where the id=wrapper allows user to close modal by clicking outside the modal */
        onClick={handleClose}>
            
            <div className='w-[600px] flex flex-col'>
                {/* User may also close the modal by clicking the 'X' on the modal edge */}
                <button className='text-white text-xl place-self-end'
                onClick={()=> onClose() && console.log("hey")}
                >
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    Modal
                    {console.log("Hello")}
                </div>
            </div>
        </div>
    );
};

export default Modal