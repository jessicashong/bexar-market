import React from 'react';
import { Link } from "react-router-dom";
// Import style.css to include tailwind directives
import './style.css';

function About() {

    return (
        <div>
            <div>
                <h2>Our Mission</h2>
                <p>[Mission Statement]</p>
            </div>
            <div>
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