import React from 'react';
import { Link } from "react-router-dom";

function About() {

    return (
        <div className='about'>
            <div className='mission'>
                <h2>Our Mission</h2>
                <p>Our mission at Bexar Market is to create an open space for small businesses to share their passion with the world. We wanted to showcase the amazing talent that can be found here in the heart of Bexar County, and allow those who cannot physically explore to see the collections that Bexar artists can offer. Please feel free to browse and even create your own account to add favorites and discover your new favorite creators.</p>
            </div>
            <div className='contributors'>
                <ul>
                    <li className='profile-card'>
                        <p>Chloe</p>
                        <a
                            href="https://chloeeh.github.io/hanks-react-portfolio/"
                        >
                        <p>Portfolio Site</p>
                        </a>
                    </li>
                    <li className='profile-card'>
                        <p>Jessica</p>
                        <a
                            href="https://jessicashong.github.io/react-portfolio/"
                        >
                        <p>Portfolio Site</p>
                        </a>
                    </li>
                    <li className='profile-card'>
                        <p>Lydia</p>
                        <a
                            href="https://ldudrey.github.io/portfolio-v2/"
                        >
                        <p>Portfolio Site</p>
                        </a>
                    </li>
                    <li className='profile-card'>
                        <p>Michael</p>
                        <a
                            href="https://mdinkelbach.github.io/portfolio-resume/"
                        >
                        <p>Portfolio Site</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;