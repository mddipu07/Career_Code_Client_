 export const jobsCreatedByPromise = (email,accessToken) =>{
     return fetch(`/jobs/applications?email=${email}`,{
        headers:{
           authorization : `Bearer ${accessToken}`
        }
     }).then(res => res.json())
}