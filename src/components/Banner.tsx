import React from 'react';
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className='container mx-auto py-15 grid grid-cols-2'>
            <div className=' '>
            <h1>Build Your Ideal <span>Development</span><span> Stack</span></h1>
            <p>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>

            <div>
                 <button className="px-4 py-1 border-2 border-[#D91B7E] rounded-4xl
                       bg-[#D91B7E] text-white
                       hover:bg-transparent hover:text-[#D91B7E]">Explore Technologies</button>
            <button className="px-4 py-1 border border-transparent rounded-4xl
                       bg-transparent text-black
                       hover:bg-[#D91B7E] hover:text-white">Learn MoreSign In</button>

            </div>

            </div>

            {/* Right Side --> */}
           
            <div>
                <img src={BannerImg} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;