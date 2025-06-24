 export const myApplicationPromise = (email , accessToken) =>{
     return fetch (`/applications?email=${email}`,{
      headers:{
         authorization: `Bearer ${accessToken}`
      }
     }).then(res => res.json())
     }
