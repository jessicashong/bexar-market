import React from 'react';
import { Link } from "react-router-dom";

function About() {

    return (
        <div className='about'>
            <div className='mission'>
                <h2>Our Mission</h2>
                <p>[Mission Statement]</p>
            </div>
            <div className='contributors'>
                <ul>
                    <li>Chloe</li>
                    <li>Jessica</li>
                    <li>Lydia</li>
                    <li>Michael</li>
                </ul>
            </div>
        </div>
    )
}

export default About;