import React, { useContext } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link } from 'react-router-dom';
import { AuthServices } from '../../../../context/AuthContext/AuthContext';

const Showservicetohome = () => {
    const { services } = useContext(AuthServices)
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                {
                    services.slice(0, 3).map(service => <div>
                        <div className="flex flex-col mt-6 m-4 h-full rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex space-x-4 mt-2">
                                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{service.author}</Link>
                                    <span className="text-xs dark:text-gray-400">4 hours ago</span>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <img src={service.img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{service.name}</h2>
                                <p className="text-sm dark:text-gray-400">{service.des.slice(0, 100) + '...'}</p>
                            </div>
                            <div className="flex flex-wrap justify-between mt-10">
                                <div className="space-x-2">
                                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                                        </svg>
                                    </button>
                                    <button aria-label="Bookmark this post" type="button" className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex text-sm dark:text-gray-400">
                                    <small>
                                        <DynamicStar width={20} rating={service.ratings} />
                                    </small>

                                </div>
                            </div>
                            <div>
                                {/* <button type="button" className="flex items-center justify-center w-full mb-96 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <Link to='/services'>
                    <button className='dark:bg-violet-400 dark:text-gray-900 mt-14 px-8 font-semibold py-4 rounded-md hover:dark:bg-violet-700'>Load More</button>
                </Link>
            </div>
        </div>
    );
};

export default Showservicetohome;