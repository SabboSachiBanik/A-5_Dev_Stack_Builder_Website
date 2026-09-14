// import React from 'react';
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <section className='container p-10 '>
            
        <div className='grid grid-cols-4 gap-2 items-center justify-items-center text-[#7a899f]'>
            <div>
                <img className='mt-15' src={Logo} alt="Footer Logo" />
                <p>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <div className='flex gap-4 pt-5 pb-5 text-black'>
                     <a href="https://github.com/SabboSachiBanik">GitHub</a>
                    <a href="https://x.com/AjoyBan10311818">Twitter</a>
                    <a href="https://www.linkedin.com/in/sabbo-sachi-banik-825430193/">LinkedIn</a>
                </div>
            </div>
               
            <div>
               <p className='text-black'>PRODUCT</p>
               <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
               </ul>
            </div>

            <div>
               <p className='text-black'>COMPANY</p>
               <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Careers</a></li>
               </ul>
            </div>

            <div >
               <p className='text-black'>LEGAL</p>
               <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
               </ul>
            </div>

        </div>


        
        <div className='flex justify-between items-center pb-2 pt-15'>
            <div><p>© 2026 Dev Stack. All rights reserved.</p></div>
            <div className='flex gap-5'>
                <a href="">Privacy</a>
                <a href="">Terms</a>
            </div>
        </div>
        </section>
    );
};

export default Footer;