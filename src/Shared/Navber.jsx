import { Link } from 'react-router-dom';
import logo from '../assets/Sanwar logo-01-07-01.png'
import { FaCartPlus, FaSearch } from "react-icons/fa";

const Navber = () => {


    const links = <>
        <li> <Link>Brands</Link> </li>
        <li> <Link>Brands</Link> </li>
        <li> <Link>Brands</Link> </li>
    </>
    return (
        <>
            <div className="navbar text-black lg:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img src={logo} className='w-40' alt="" /></Link>
                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div> */}
                <label className="input hidden input-bordered md:flex items-center gap-2 w-full">
                    <input type="text" className="grow text-black" placeholder="Search Your Choise" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-7 w-6 opacity-70 text-black">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="navbar-end flex items-center gap-5 font-bold">
                    <Link className=''>Login</Link>
                    <Link className='text-2xl'><FaCartPlus /></Link>
                </div>
            </div>
            <div className='bg-black flex md:hidden items-center gap-2  justify-center px-5'>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-sm text-black" />

                <FaSearch className='text-white text-2xl' />

            </div>
            <div className="navbar-center hidden lg:flex items-center justify-center bg-[#BB8C2D] text-black">
                <ul className="menu menu-horizontal font-bold px-1 space-x-2">
                    {links}
                </ul>
            </div>
        </>
    );
};

export default Navber;