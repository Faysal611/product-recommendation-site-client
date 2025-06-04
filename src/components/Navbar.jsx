import React, { useState } from 'react';
import { NavLink } from 'react-router';
import useAllContext from '../hooks/useAllContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, loading} = useAllContext(); 
    const [isAtTop, setIsAtTop] = useState(true);

    window.addEventListener("scroll", () => {
        if(window.scrollY === 0) {
            setIsAtTop(true)
        } else {
            setIsAtTop(false)
        }
    })

    const handleLogOut = () => {
        signOut(auth)
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign Out Successfull",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    return (
        <>
            <div className={`z-10 flex items-center w-screen px-10 justify-between custom-transition sticky top-0 ${isAtTop ? "bg-transparent py-4" : "bg-[#302c78] py-1"}`}>
                <div>
                    <img className='w-24' src="logo.png" alt="logo" />
                </div>
                <div className={ `font-medium text-xl flex gap-10 ${isAtTop ? "text-black" : "text-white"}`}>
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/"}><button>Home</button></NavLink>
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/queries"}><button>Queries</button></NavLink>
                    {!loading && user ? <>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/queries"}><button>Recommendations For Me</button></NavLink>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/queries"}><button>My Queries</button></NavLink>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/queries"}><button>My Recommendations</button></NavLink>
                    </> : ""}
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/contact"}><button>Contact</button></NavLink>

                </div>
                {!loading && user ? <button onClick={handleLogOut} className='btn bg-[#15c39a] text-white text-2xl hover:scale-105 duration-200 transition-all'>Log Out</button> : <div><NavLink to={"/signin"}><button className='btn bg-[#15c39a] text-white text-2xl hover:scale-105 duration-200 transition-all'>Sign In</button></NavLink></div>}

            </div>
            {isAtTop ? <hr className='h-[2px] bg-gray-300 border-none' /> : ""}
        </>

    );
};

export default Navbar;