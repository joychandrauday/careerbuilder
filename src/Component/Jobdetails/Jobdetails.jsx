import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiCurrencyDollar } from "react-icons/hi";
import './jobDetails.css'
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplied } from '../../utility/localstorage';

import 'react-toastify/dist/ReactToastify.css';


const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id}=useParams()
    const idText=parseInt(id)
    const job=jobs.find(job=> job.id === idText)
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}=job;

    
    const notify = () => {
        saveJobApplied(idText)
        toast(`you applied for the post of ${job_title}!`)
    };



    return (
        <div>
            <div className="detailsTop min-h-44 flex items-center justify-center">
                <h1 className="text-4xl capitalize font-bold">job details</h1>
            </div>
            <div className="flex gap-8 text-lg job-details mt-16">
                <div className="basis-2/3 text-left">
                    <h1 className='capitalize text-gray-500 text-md'><span className='text-black font-bold'>job description: </span>{job_description}</h1>
                    <h1 className='capitalize text-gray-500 text-md mt-4'><span className='text-black font-bold'>job responsibility: </span>{job_responsibility}</h1>
                    <h1 className='capitalize text-gray-500 text-md mt-4'><span className='text-black font-bold'>educational requirements: <br></br></span>{educational_requirements}</h1>
                    <h1 className='capitalize text-gray-500 text-md mt-4'><span className='text-black font-bold'>Experience: <br></br></span>{experiences}</h1>
                </div>
                <div className="basis-1/3">
                    <div className="bg-gray-200 text-left rounded-xl p-8">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold text-black capitalize">job details</h1>
                            
                            <img className='w-1/3' src={logo} alt="asdf" />
                        </div>
                        <hr className='border-gray-400 my-4'/>
                        <div className="text-gray-700 font-bold">
                            <div className="flex gap-2 items-center">
                                <HiCurrencyDollar />
                                <p><span className='text-black font-bold'>Salary: </span>{salary} (per month)</p> 
                            </div>
                            <div className="flex gap-2 items-baseline">
                                <MdOutlineSubtitles />
                                <p><span className='text-black font-bold'>job title: </span>{job_title}</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-black capitalize mt-8">contact information</h1>
                        <hr className='border-gray-400 my-4'/>
                        <div className="text-gray-700 font-bold">
                            <div className="flex gap-2 items-center">
                                <FaPhoneAlt />
                                <p><span className='text-black font-bold'>phone: </span>{contact_information.phone} </p> 
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdEmail />
                                <p><span className='text-black font-bold'>email: </span>{contact_information.email}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaLocationDot />
                                <p>{location}</p>
                            </div>
                        </div>
                    </div>
                    <button  onClick={notify} className="btn mt-4 font-bold bg-blue-600 text-white hover:bg-blue-900 capitalize w-full">apply now <ToastContainer /></button>
        
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;