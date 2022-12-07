import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthServices } from '../../../context/AuthContext/AuthContext';
import logo from '../../../images/logo.svg'

const Navbar = () => {
    const { Logout, currentUser } = useContext(AuthServices)
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
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li><Link>Item 1</Link></li> */}
                            <li tabIndex={0}>
                                <Link className="justify-between"
                                    to='/'
                                >
                                    Home
                                    {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                                </Link>

                            </li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                currentUser ? <>
                                    <li className="flex">
                                        <NavLink rel="noopener noreferrer" onClick={handleLogout} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                        >Log Out</NavLink>
                                    </li>
                                    <li><Link to='/addservices'>Add Services</Link></li>
                                    <li><Link to='/myreview' >My Reviews</Link></li>
                                </> : <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                    <Link to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2" >
                        <h1 className='text-purple-300 text-3xl font-bold'>My Photography</h1>
                        <img src={logo} style={logoSize} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* <li><Link>Item 1</Link></li> */}
                        <li tabIndex={0}>
                            <Link to='/'>
                                Home
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> */}
                            </Link>
                        </li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            currentUser ? <>
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" onClick={handleLogout} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 "
                                    >Log Out</NavLink>
                                </li>
                                <li><Link to='/addservices'>Add Services</Link></li>
                                <li><Link to='/myreview'>My Reviews</Link></li>
                            </> : <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;