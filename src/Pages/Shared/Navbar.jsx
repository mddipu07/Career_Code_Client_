import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/Auth/AuthContext';
import NavBarLogo from '../../assets/team/images.jpg'
const Navbar = () => {
   const {user , signOutUser} = use(AuthContext)

   const handleSignOut = () =>{
       signOutUser().then(() =>{
        console.log('signed Out User');
       })
       .catch((error) =>{
        console.log(error);
       })
   }
   const links = <>
    <li><NavLink to="/">Home</NavLink></li>
   </>

    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <img className='w-15' src={NavBarLogo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> : <> <NavLink className="btn mr-2" to="/register">Register</NavLink>
    <NavLink className="btn" to="/signin">SignIn</NavLink></>
   }
  </div>
</div>
    );
};

export default Navbar;