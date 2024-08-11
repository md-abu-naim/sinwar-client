import { Link } from 'react-router-dom';
import logo from '../assets/Sanwar logo-01-07-01.png'
import { FaCartPlus, FaSearch } from "react-icons/fa";
import Navlinks from './Navlinks';
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react';

const Navber = () => {
    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
    }

    const links = <>
        <li className='pl-2'><Link>Brands</Link> </li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li> <Link>Brands</Link> </li>
        <li> <Link>Brands</Link> </li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    </>
    return (
        <>
            <div className="navbar text-black lg:px-14 mt-3">

                {/* navber */}
                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <button
                            onClick={handleToggle}
                            className='mobile-menu-button p-4 focus:outline-none focus:bg-[#bba684]'
                        >
                            <AiOutlineBars className='h-5 w-5' />
                        </button>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img src={logo} className='w-40' alt="" /></Link>
                </div>

                {/* Large device search bar */}
                <label className="input hidden border-[#BB8C2D] input-bordered md:flex items-center gap-2 w-full">
                    <input type="text" className="grow text-black" placeholder="Search Your Choise" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-7 w-6 opacity-70 text-[#BB8C2D]">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="navbar-end flex items-center gap-5 font-bold">
                    <Link className=''>Login</Link>
                    <Link className='flex lg:mr-0 mr-2 '>
                        <FaCartPlus className='md:text-2xl relative' /><small className=' bg-[#BB8C2D] absolute md:top-2 top-3 right-0 lg:right-10 md:ml-4  rounded-full p-1 text-xm font-extrabold'>25</small>
                    </Link>
                </div>
            </div>

            {/* Small device search bar */}
            <div className='bg-[#BB8C2D] text-black flex md:hidden items-center gap-2  justify-center px-5'>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-sm text-black" />

                <FaSearch className='md:text-white text-black text-2xl' />
            </div>

            {/* large device navLinks */}
            <div className="navbar-center hidden md:flex items-center justify-center bg-[#BB8C2D] text-black">
                <ul className="menu menu-horizontal font-bold px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <Navlinks isActive={isActive} setActive={setActive} links={links} />
        </>
    );
};

export default Navber;