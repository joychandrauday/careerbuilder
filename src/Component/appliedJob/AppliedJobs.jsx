import React from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const AppliedJobs = ({jobSingle}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}=jobSingle;
    return (
        <div className='mt-8'>
            <div className='flex items-center p-4 border rounded mb-4 gap-12'>
                <div className="basis-1/5 bg-slate-200 min-h-40 flex items-center p-4 rounded">
                    <img className='w-44' src={logo} alt="" />
                </div>
                <div className="basis-3/5">
                    <div className="text-left">
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
                                <p>salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/5">
                    <button className="btn mt-12 font-bold bg-blue-600 text-white hover:bg-blue-900 capitalize ">view details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;