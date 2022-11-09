import React, { useContext } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link } from 'react-router-dom';
import { AuthServices } from '../../../../context/AuthContext/AuthContext';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Showservicetohome = () => {
    const imgSize = {
        width: '400px',
        height: '250px'
    }
    const { services } = useContext(AuthServices)
    return (
        <div>
            <h1 className='text-4xl m-12 text-purple-500 font-bold'>Services</h1>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                {
                    services.slice(0, 3).map(service => <div>
                        <div className="flex flex-col mt-6 m-4 h-full rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex space-x-4 mt-2">
                                <img alt="" src={service.author_img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{service.author}</Link>
                                    <span className="text-xs dark:text-gray-400">4 hours ago</span>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <PhotoProvider>
                                    <div className="foo">

                                        <PhotoView key={service.sl} src={service.img}>
                                            <img src={service.img} style={imgSize} alt="" />
                                        </PhotoView>

                                    </div>
                                </PhotoProvider>
                                {/* <img src={service.img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" /> */}
                                <h2 className="mb-1 text-xl font-semibold">{service.name}</h2>
                                <p className="text-sm dark:text-gray-400">{service.des.slice(0, 100) + '...'}</p>
                            </div>
                            <div className="flex flex-wrap justify-between mt-10">
                                <div className="space-x-2">
                                    <h1 className='text-purple-500 ml-2'>${service.price}</h1>
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
                    <button className='dark:bg-violet-400 dark:text-gray-900 mt-14 px-8 font-semibold py-4 rounded-md hover:dark:bg-violet-700'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Showservicetohome;