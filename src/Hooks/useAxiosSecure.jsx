import React from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://career-code-server-mocha.vercel.app'
})


const useAxiosSecure = () => {
 
    const {user , signOutUser} = useAuth();
     axiosInstance.interceptors.request.use(config =>{
         config.headers.authorization = `Bearer ${user.accessToken}`
         return config;
     })

    //  Response Interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error =>{
        if(error.status === 401 || error.status === 403){

          signOutUser()
          .then(() =>{
            console.log('sign out user for 401 status code');
          })
          .catch(error =>{
            console.log(error);
          })
        }
        console.log('error in interceptor', error);
        return Promise.reject(error)
    })




    return axiosInstance
};

export default useAxiosSecure;