import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link, useLoaderData } from 'react-router-dom';
import Opinion from './Opinion/Opinion';

const Servicedetails = () => {
    const services = useLoaderData()
    console.log(services);
    const { author, des, img, name, ratings, sl } = services
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {/* -------- */}
                <div>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                                <div className="space-y-2">
                                    <Link rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{name}</Link>
                                    <p className="text-xs dark:text-gray-400">By
                                        <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline"> {author}</Link>
                                    </p>
                                </div>
                                <div className="dark:text-gray-100">
                                    <p>{des}</p>
                                </div>
                                <div className="flex justify-center text-sm dark:text-gray-400">
                                    <small>
                                        <DynamicStar width={20} rating={ratings} />
                                    </small>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------- */}
                <div>

                    <div className='bg-purple-900'>
                        <h1 className='mt-16 mb-6 text-3xl font-semibold  text-purple-200 '>Reviews</h1>
                    </div>
                    <div className="container  flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-500">
                                <div className="flex text-sm dark:text-gray-400">
                                    <small>
                                        <DynamicStar width={20} rating={ratings} />
                                    </small>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                            <p>Work is too beautiful. I appreciate his works </p>
                        </div>
                    </div>


                    {/* ---------------------------- */}
                    <Opinion
                        sl={sl}
                    ></Opinion>
                </div>
                {/* ------- */}

            </div>
        </div>
    );
};

export default Servicedetails;