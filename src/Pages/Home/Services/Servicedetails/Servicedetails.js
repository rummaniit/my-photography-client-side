import React, { useContext } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthServices } from '../../../../context/AuthContext/AuthContext';
import Opinion from './Opinion/Opinion';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const Servicedetails = () => {
    const services = useLoaderData()
    const { reviews } = useContext(AuthServices)
    // console.log(reviews);
    const { author, des, img, name, ratings, sl } = services
    const results = reviews.filter(rvw => rvw.sl === sl)
    const rev = reviews.find(rvw => rvw.sl === sl)
    console.log(rev);
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {/* -------- */}
                <div>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <PhotoProvider>
                                <div className="foo">

                                    <PhotoView key={sl} src={img}>
                                        <img src={img} alt="" />
                                    </PhotoView>

                                </div>
                            </PhotoProvider>
                            {/* <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" /> */}
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
                {/* <Opinion
                    sl={sl}
                ></Opinion> */}
                {/* {
                    reviews?
                } */}
                <div className='p-6'>
                    <h1 className='mt-6 mb-6 text-3xl font-semibold  text-purple-200 '>Reviews</h1>
                    {rev ?

                        results.map(result => <div>

                            <div className=''>
                            </div>
                            <div className="container  mt-8 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={result.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{result.name}</h4>
                                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <div className="flex text-sm dark:text-gray-400">
                                            <small>
                                                <DynamicStar width={20} rating={result.ratings} />
                                            </small>

                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                    <p>{result.text} </p>
                                </div>
                            </div>


                            {/* ---------------------------- */}
                        </div>)
                        : <h1 className='text-2xl text-purple-500 font-bold'>No Reviews Yet</h1>
                    }
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