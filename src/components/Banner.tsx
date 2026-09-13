import React from 'react';
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className='container mx-auto pt-23 pb-5 grid grid-cols-2'>
            <div className=' '>
            <h1 className='text-5xl font-bold mt-20'>Build Your Ideal <br /><span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

            <p className='text-[#475569] py-10'>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>

            <div className='grid grid-cols-3 flex gap-3 items-center'>
                 <button className=" w-full py-2 border  rounded-md bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white hover:bg-none hover:bg-transparent hover:border-[#cad1dc] hover:text-black transition-colors]">Explore Technologies</button>
            <button className="w-full py-2 border border-1 border-[#cad1dc] rounded-md text-black bg-transparent
                       hover:bg-gradient-to-r from-[#F97316] to-[#EC4899] hover: bg-[#D91B7E] hover:text-white">Learn More</button>

            </div>

            </div>

            {/* Right Side --> */}
           
            <div className='flex items-center '>
                <img className='w-full h-auto max-h-[450px] object-cover' src={BannerImg} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;