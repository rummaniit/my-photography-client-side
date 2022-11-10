import React, { useContext, useEffect, useState } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthServices } from '../../../../context/AuthContext/AuthContext';
import Opinion from './Opinion/Opinion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../../../hooks/useTitle';


const Servicedetails = () => {
    useTitle('Service Details')
    const { reviews, currentUser, Logout } = useContext(AuthServices)
    console.log(currentUser);
    const imageStyle = {
        width: '50px',
        borderRadius: '50%'
    }
    const services = useLoaderData()
    console.log(reviews);
    const { author, des, img, name, ratings, sl, author_img, price } = services
    const results = reviews.filter(rvw => rvw.sl === sl)
    const rev = reviews.find(rvw => rvw.sl === sl)
    // console.log(results.updatedAt);


    let [person, setPerson] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${currentUser?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 && res.status === 403) {
                    Logout()
                }
                return res.json()
            })
            .then(data => setPerson(data))
    }, [currentUser?.email])
    // console.log(person);



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
                                    <p className="flex justify-evenly items-center text-xs dark:text-gray-400">
                                        <small className='text-xl text-purple-500'><Link rel="noopener noreferrer" href="#" className="text-xs hover:underline">By {author}</Link></small>
                                        <small>
                                            <img src={author_img} style={imageStyle} alt="" />
                                        </small>
                                        <small className='text-xl text-purple-500'>${price}</small>
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

                        results.reverse().map(result => <div>

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
                    {
                        currentUser ? <Opinion
                            sl={sl}
                        ></Opinion> : <div>
                            <h1 className='text-purple-900 text-4xl font-extrabold border p-10 mt-16'>Please Sign In First to Give Feedback </h1>
                            <Link to='/login'><button className='bg-purple-300 mt-10 rounded-md px-16 py-2'>Sign In</button></Link>
                        </div>
                    }
                </div>


                {/* ------- */}

            </div>
        </div>
    );
};

export default Servicedetails;