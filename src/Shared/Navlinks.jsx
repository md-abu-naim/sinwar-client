// import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";

// eslint-disable-next-line react/prop-types
const Navlinks = ({ isActive, setActive, links }) => {


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div
            className={`z-10 md:fixed md:hidden  bg-white  flex flex-col justify-between overflow-x-hidden text-black  w-64 space-y-6 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full shadow-none'
                }  md:translate-x-0  transition duration-200 ease-in-out shadow-black shadow-2xl `}
        >
            <div>
                <div className='flex items-center shadow-lg justify-center bg-[#BB8C2D]'>
                    <div className='w-full px-4 py-2  justify-center items-center'>
                        <h3 className='text-2xl font-bold text-black'>Categroies</h3>
                    </div>
                    <button
                        onClick={handleToggle}
                        className='mobile-menu-button p-4 focus:outline-none focus:bg-[#bba684]'
                    >
                        <ImCancelCircle className='h-5 w-5' />
                    </button> 
                </div>

                {/* Nav Items */}
                <div className='flex flex-col justify-between flex-1 mt-6'>

                    {/*  Menu Items */}
                    {links}
                </div>
            </div>

            <div>
                <hr />

                {/* Profile Menu */}
                <NavLink
                    to='/dashboard/profile'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                        }`
                    }
                >
                    <FcSettings className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Profile</span>
                </NavLink>
                {/* logout */}
                <button
                    className='flex w-full items-center px-4 py-2 mt-5 text-black hover:text-white hover:bg-black transition-colors duration-300 transform'
                >
                    <GrLogout className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Navlinks;







