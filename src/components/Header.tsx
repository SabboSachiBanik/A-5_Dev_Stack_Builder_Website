import React from 'react';
import logo from "../assets/logo-text.png";

const Header = () => {
    return (
        <header className='p-3'>
            <nav className= 'container mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className='flex gap-5 items-center'>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Technologies</li></a>
                        <a href=""><li>Projects</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className='flex gap-3'>
                    <button className="px-4 py-1 border border-transparent rounded-4xl
                       bg-transparent text-black
                       hover:bg-[#D91B7E] hover:text-white">Sign In</button>
                    <button className="px-4 py-1 border-2 border-[#D91B7E] rounded-4xl
                       bg-[#D91B7E] text-white
                       hover:bg-transparent hover:text-[#D91B7E]">Sign Up</button>
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;