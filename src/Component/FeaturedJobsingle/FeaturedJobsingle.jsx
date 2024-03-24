import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const FeaturedJobsingle = ({featuredJob}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}=featuredJob;

    return (
        <div className='border px-8 py-4 text-left rounded shadow' >
            <img className='w-1/5 my-4' src={logo} alt="" />
            <h1 className="text-2xl capitalize font-bold">{job_title}</h1>
            <p className="font-bold">{company_name}</p>
            <div className="flex items-center gap-2 mt-4">
                <button className="border-blue-400 font-bold text-blue-800 hover:bg-blue-400 hover:text-white p-2 text-sm border rounded-lg px-6">{remote_or_onsite}</button>
                <button className="border-blue-400 font-bold text-blue-800 hover:bg-blue-400 hover:text-white p-2 text-sm border rounded-lg px-6">{job_type}</button>
            </div>
            <div className="flex gap-4 my-4 items-center text-gray-500">
                <div className="flex gap-1 items-center">
                    <FaLocationDot />
                    <p>{location}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <HiCurrencyDollar />
                    <p>{salary}</p>
                </div>
            </div>
            <div className="navbar-end">
                <Link to={`/job/${id}`} className="btn font-bold bg-blue-600 text-white hover:bg-blue-900 capitalize ">start applying</Link>
            </div>
        </div>
    );
};

export default FeaturedJobsingle;