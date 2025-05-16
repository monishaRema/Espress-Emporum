import React from 'react';

import BannerBg from '../assets/Banner.png'

const Banner = () => {
    return (
        <section className='banner py-48' style={{ backgroundImage: `url(${BannerBg})`, backgroundSize: "cover" }}>
            <div className="container mx-auto px-5">
                <div className="banner-content max-w-[750px] ml-auto">
                    <h1 className='text-5xl text-white mb-4'>
Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className='text-base text-gray-100 mb-4'>
It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="btn bg-amber-200 text-black border border-amber-200 hover:bg-transparent hover:text-white">
Learn More
                    </button>
                </div>

            </div>  
        </section>
    );
};

export default Banner;