import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import AppliedJobs from "../../Component/appliedJob/AppliedJobs";

const Appliedjobs = () => {
    const jobs= useLoaderData()
    const [jobApplied,setJobApplied]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const jobFilter=filter=>{
        if(filter==='all'){
            setDisplayJobs(AppliedJobs);
        }
        else if(filter==='remote'){
            const remoteJobs=AppliedJobs.filter(appJob=> appJob.remote_or_onsite=== 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter==='onsite'){
            const onsiteJobs= AppliedJobs.filter(appJob=> appJob.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(()=>{
        const storedJobId=getStoredApplication();
        console.log(storedJobId)
        if(jobs.length > 0 ){
            // const jobsApplied=jobs.filter(job =>storedJobId.includes(job.id))
            const jobsApplied=[];
            for(const id of storedJobId){
                const job=jobs.find(job=>job.id===id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setJobApplied(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    },[jobs])
    return (
        <div>
            <div className="detailsTop min-h-44 flex items-center justify-center">
                <h1 className="text-4xl capitalize font-bold">Applied jobs ({jobApplied.length})</h1>
            </div>
            <div className="mb-8 flex justify-end">
                <div>
                    <select className="select select-info ">
                        <option disabled selected>Filter By</option>
                        <option onClick={()=>jobFilter('all')}>All</option>
                        <option onClick={()=>jobFilter('remote')}>Remote</option>
                        <option onClick={()=>jobFilter('onsite')}>Onsite</option>
                    </select>
                </div>
            </div>
            <div className="appliedjobcontainer">
                {
                    displayJobs.map(jobSingle=> <AppliedJobs key={jobSingle.id} jobSingle={jobSingle}></AppliedJobs>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;