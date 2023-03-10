import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/Context';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)  

    const handleLogout = () => {
            logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }

    const menu = <>
    <Link className="mx-2 font-bold rounded-none" active to='/'>Home</Link>
    <Link className="mx-2 font-bold rounded-none" to='/appointment'>Appointment</Link>

    { user?.uid ? 
        <>
        <Link className="mx-2 font-bold rounded-none" to='/myReviews'>My Reviews</Link>
        <Link className="mx-2 font-bold rounded-none" to='/dashboard'>Dashboard</Link>
        <Link onClick={handleLogout} className="mx-2 font-bold rounded-none">Sign out</Link>
       </>
    :
        <Link  className="mx-2 font-bold rounded-none" to='/login'>Login</Link>
    }
    
    </>


    return (
        <div>
           
            <div className="navbar bg-base-100 ">
          
                <div className="navbar-start h-20">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu} 
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">doctors portal</Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menu}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;