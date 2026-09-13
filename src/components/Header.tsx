import React from 'react';
import logo from "../assets/logo-text.png";

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-soft btn-secondary">Sign In</button>
                    <button className="btn btn-soft btn-secondary">Sign Up</button>
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;