// import React from 'react';
import './Banner.css'
import BannerImg from "../assets/banner-stack.png";


const Banner = () => {
    return (
        <section className='container mx-auto pt-23 pb-5 grid grid-cols-1 md:grid-cols-2'>
            <div className=' '>
            <h1 className='text-5xl font-bold mt-20'>Build Your Ideal <br/><span className='gradient-text'>Development Stack</span></h1>

            <p className='text-[#475569] py-10'>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>

            <div className='grid grid-cols-3 gap-3 items-center'>
                 <button className=" w-full py-2 border  rounded-md explore-button">Explore Technologies</button>
            <button className="w-full py-2 border learn-more-button">Learn More</button>

            </div>

            </div>

            {/* Right Side --> */}
           
            <div className='flex items-center '>
                <img className='w-full h-100 object-cover' src={BannerImg} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;