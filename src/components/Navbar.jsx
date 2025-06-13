import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
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
            <div className={`z-10 flex items-center w-screen max-sm:px-3 px-10 justify-between custom-transition sticky top-0 ${isAtTop ? "bg-transparent py-4" : "bg-[#302c78] py-1"}`}>
                <div>
                    <img className='w-24 max-sm:w-18' src="logo.png" alt="logo" />
                </div>
                <div className={ `max-sm:hidden font-medium text-xl max-sm:text-sm flex max-sm:gap-2 gap-10 ${isAtTop ? "text-black" : "text-white"}`}>
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/"}><button>Home</button></NavLink>
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/queries"}><button>Queries</button></NavLink>
                    {!loading && user ? <>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/recommendationsForMe"}><button>Recommendations For Me</button></NavLink>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/myQueries"}><button>My Queries</button></NavLink>
                        <NavLink className={({ isActive }) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/myRecommendations"}><button>My Recommendations</button></NavLink>
                    </> : ""}
                    <NavLink  className={({isActive}) => `relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} cursor-pointer hover:after:w-full after:duration-300 after:bg-[#15c39a]`} to={"/contact"}><button>Contact</button></NavLink>

                </div>
                
                {!loading && user ? 
                <>
                        <div>
                            <div className="dropdown dropdown-end mr-2 hidden max-sm:inline">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <label className="btn btn-circle swap swap-rotate">
                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox" />

                                        {/* hamburger icon */}
                                        <svg
                                            className="swap-off fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 512 512">
                                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                        </svg>

                                        {/* close icon */}
                                        <svg
                                            className="swap-on fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 512 512">
                                            <polygon
                                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                        </svg>
                                    </label>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to={"/queries"}>Queries</Link>
                                    </li>

                                    <li>
                                        <Link to={"/recommendationsForMe"}>Recommendations For Me</Link>
                                    </li>

                                    <li>
                                        <Link to={"/myQueries"}>My Queries</Link>
                                    </li>

                                    <li>
                                        <Link to={"/myRecommendations"}>My Recommendations</Link>
                                    </li>

                                </ul>
                            </div>
                            <button onClick={handleLogOut} className='btn bg-[#15c39a] text-white text-2xl hover:scale-105 duration-200 transition-all'>Log Out</button>
                        </div>
                </> : <div><NavLink to={"/signin"}><button className='btn bg-[#15c39a] text-white text-2xl hover:scale-105 duration-200 transition-all'>Sign In</button></NavLink></div>}

            </div>
            {isAtTop ? <hr className='h-[2px] bg-gray-300 border-none' /> : ""}
        </>

    );
};

export default Navbar;