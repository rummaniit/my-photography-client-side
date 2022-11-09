import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg'

const Header = () => {
    let activeStyle = {
        backgroundColor: "#301934",
        padding: '15px',
    };

    // let activeClassName = "underline";
    let logoSize = {
        width: '120px'
    }
    return (
        <div>
            <header className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2" >
                        <h1 className='text-purple-300 text-3xl font-bold'>My Photography</h1>
                        <img src={logo} style={logoSize} alt="" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/services' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Services</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/blogs' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Blogs</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/contact' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >Contact</NavLink>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to='/login'>
                            <button className="self-center px-8 py-3 rounded">Sign in</button>
                        </Link>
                        <Link to='register'>
                            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
                    </div>
                    <button className="p-4 lg:hidden">
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