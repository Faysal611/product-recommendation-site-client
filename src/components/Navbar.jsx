import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true)
    window.addEventListener("scroll", () => {
        if(window.scrollY === 0) {
            setIsAtTop(true)
        } else {
            setIsAtTop(false)
        }
    })

    return (
        <>
            <div className={`flex items-center w-screen px-10 justify-between custom-transition sticky top-0 ${isAtTop ? "bg-transparent py-5" : "bg-[#302c78] py-2"}`}>
                <div>
                    <img className='w-24' src="logo.png" alt="logo" />
                </div>
                <div className={ `font-medium text-xl flex gap-10 ${isAtTop ? "text-black" : "text-white"}`}>
                    <NavLink  className={({isActive}) => `cursor-pointer relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/"}><button>Home</button></NavLink>
                    <NavLink  className={({isActive}) => `cursor-pointer relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/queries"}><button>Queries</button></NavLink>
                    <NavLink  className={({isActive}) => `cursor-pointer relative after:absolute after:-bottom-[3px] after:left-0 ${isActive ? "after:h-[6px] after:w-full" : "after:w-0 after:h-[3px]"} hover:after:w-full after:duration-200 after:bg-[#15c39a]`} to={"/contact"}><button>Contact</button></NavLink>

                </div>
                <div><NavLink><button className='btn bg-[#15c39a] text-white text-2xl'>Sign In</button></NavLink></div>

            </div>
            {isAtTop ? <hr className='h-[2px] bg-gray-300 border-none' /> : ""}
        </>

    );
};

export default Navbar;