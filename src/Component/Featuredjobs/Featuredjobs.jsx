import React, { useEffect, useState } from 'react';
import FeaturedJobsingle from '../FeaturedJobsingle/FeaturedJobsingle';

const Featuredjobs = () => {
    const [featuredjobs,setFeaturedjobs]=useState([])
    const [jobsLength,setJobsLength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
            .then(res => res.json())
            .then(data=>setFeaturedjobs(data))

    },[])
    return (
        <div className='my-4'>
            <h1 className="text-4xl capitalize font-bold">featured jobs</h1>
            <p className="text-gray capitalize text-md">Get your desired job from 1000+ job opportunities and more.</p>
            <div className="featuredJobs lg:grid grid-cols-2 gap-4 mt-12">
                {
                    featuredjobs.slice(0,jobsLength).map(featuredJob=> <FeaturedJobsingle key={featuredJob.id} featuredJob={featuredJob}></FeaturedJobsingle>)    
                }
            </div>
            <div className={jobsLength===featuredjobs.length ? 'hidden': ''}>
                <button onClick={()=> setJobsLength(featuredjobs.length)} className="btn mt-12 font-bold bg-blue-600 text-white hover:bg-blue-900 capitalize ">see all jobs</button>
            </div>
        </div>
    );
};

export default Featuredjobs;