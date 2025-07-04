import React, { use } from 'react';
import signInLottie from '../../assets/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const SignIn = () => {
  const {SignInUser} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state || '/';
      console.log('location in sign in page', location);
   const handleLogin = (e) =>{
       e.preventDefault();
       const form = e.target;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email , password);
       
     
       SignInUser(email,password).then((result) =>{
          console.log(result);
          navigate(from)
       })
       .catch((error) =>{
           console.log(error);
       })


   }
 



    return (
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   
          <Lottie speed={0.8} style={{width:"350px"}}   animationData={signInLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignIn Now!</h1>
      <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </fieldset>
      </form>
      <SocialLogin from={from}></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;