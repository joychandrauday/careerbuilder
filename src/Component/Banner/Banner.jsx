import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex items-center min-h-96 pt-12'>
            <div className="wrapper flex items-center">
                <div className="banner-left text-left basis-1/2">
                    <h1 className="text-black capitalize text-6xl font-bold">start finding your dream job with <span className='text-blue-800'>career builder</span></h1>
                    <p className="mt-4 capitalize">explore more opportunities to start your dream job from varieties of jobs and companis.one stop solution for your job hunting and more</p>
                    <div className="navbar-end">
                    <NavLink to={'/jobs'} className="mt-4 btn font-bold bg-blue-600 text-white hover:bg-blue-900 capitalize ">start applying</NavLink>
            </div>
                </div>
                <div className="banner-right basis-1/2 flex justify-end">
                    <img className='w-4/5' src="/src/assets/user.png" alt="" />
                </div>      
            </div>
        </div>
    );
};

export default Banner;