import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthServices } from '../../../context/AuthContext/AuthContext';
import logo from '../../../images/logo.svg'

const Header = () => {
    const { Logout, currentUser } = useContext(AuthServices)
    // const [clicked, setClicked] = useState(false)
    let activeStyle = {
        backgroundColor: "#301934",
        padding: '15px',
    };

    // let activeClassName = "underline";
    let logoSize = {
        width: '120px'
    }
    const handleLogout = () => {
        Logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div>
            <header className="p-6 dark:bg-gray-800 dark:text-gray-100 mb-36">
                <div className=" lg:container flex justify-between h-16 mx-auto relative">
                    <Link to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2" >
                        <h1 className='text-purple-300 text-3xl font-bold'>My Photography</h1>
                        <img src={logo} style={logoSize} alt="" />
                    </Link>

                    <ul className="sm:flex flex-col justify-center items-center md:flex-row">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/services' className=" flex  items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Services</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/blogs' className=" flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Blogs</NavLink>
                        </li>
                        {/* <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/contact' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Contact</NavLink>
                        </li> */}
                        {
                            currentUser ? <div className='flex flex-col md:flex-row'>
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" onClick={handleLogout} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >Log Out</NavLink>
                                </li>
                                {/* <Link>
                                    <button className="self-center px-8 py-3 rounded" onClick={handleLogout}>Log Out</button>
                                </Link> */}
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" to='/addservices' className="flex  items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >Add Services</NavLink>
                                </li>

                                {/* <Link to='/addservices'>
                                    <button className="self-center px-8 py-3 font-semibold rounded ">Add Service</button>
                                </Link> */}
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" to='/myreview' className=" flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >My Reviews</NavLink>
                                </li>
                                {/* <Link to='/myreview'>
                                    <button className="self-center px-8 py-3 font-semibold rounded ">My Review</button>
                                </Link> */}
                            </div> : <div className='flex flex-col md:flex-row'>
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" to='/login' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >Login</NavLink>
                                </li>
                                <li className="flex sm:bg-purple-900">
                                    <NavLink rel="noopener noreferrer" to='/register' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >Register</NavLink>
                                </li>
                                {/* <Link to='/login'>
                                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                                </Link> */}
                                {/* <Link to='/register'>
                                    <button className="self-center px-8 py-3 font-semibold rounded ">Sign up</button>
                                </Link> */}

                            </div>
                        }

                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">


                    </div>
                    <button className="p-4 lg:hidden md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header >

        </div >
    );
};

export default Header;