
const getStoredApplication= id =>{
    const storedApplication=localStorage.getItem('applied-job')
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
    
}

const saveJobApplied= id =>{
    const storedApplication=getStoredApplication();
    const exists=storedApplication.find(application => application === id)
    if(!exists){
        storedApplication.push(id);
        localStorage.setItem('applied-job',JSON.stringify(storedApplication));
    }
}
export {getStoredApplication,saveJobApplied}