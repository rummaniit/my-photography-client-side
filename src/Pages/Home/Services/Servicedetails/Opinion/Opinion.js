import React, { useContext, useState } from 'react';
import { AuthServices } from '../../../../../context/AuthContext/AuthContext';

const Opinion = ({ sl }) => {
    const { currentUser, users } = useContext(AuthServices)
    console.log(currentUser, users);
    let [data, setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const sl = parseInt(form.slnumber.value)
        const img = form.imageurl.value
        const ratings = parseInt(form.ratings.value)
        const text = form.text.value
        const email = form.email.value
        form.reset()
        window.location.reload()
        const reviews = {
            sl, name, ratings, img, text, email
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => {
                res.json()
            })
            .then(info => {
                console.log(info)
                setData(info)
            })
        console.log(data)
    }
    return (
        <div>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 mt-11">
                {/* <h1>{sl}</h1> */}
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">

                        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                            <form novalidate="" onSubmit={handleSubmit} className=" flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid ">
                                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 w-full">
                                    <div className="grid grid-cols-2 gap-4 col-span-full md:col-span-3 text-center">
                                        <div className="col-span-full sm:col-span-3">
                                            <label for="firstname" className="text-sm ">Serial Number</label>
                                            <input id="firstname" type="number" name='slnumber' placeholder="Serial Number" defaultValue={sl} readOnly className="w-full md:ml-12  text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label for="firstname" className="text-sm ">Name</label>
                                            <input id="firstname" type="text" name='name' placeholder="Name" className="w-full md:ml-12  text-center rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label for="lastname" className="text-sm ">Image Url</label>
                                            <input id="lastname" type="text" defaultValue={currentUser.photoURL} readOnly name='imageurl' placeholder="Image Url " className=" rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900 w-full md:ml-12  text-center " />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label for="ratings" className="text-sm ">Rating</label>
                                            <input id="ratings" name='ratings' type="text" placeholder="Ratings" className="rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900 w-full md:ml-12  text-center " />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label for="email" className="text-sm">Email</label>
                                            <input id="email" name='email' type="email" placeholder="Email" className="rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900 w-full md:ml-12  text-center " />
                                        </div>
                                        <div className="col-span-full">
                                            <label for="address" className="text-sm ">Text</label>
                                            <input id="address" name='text' type="text" placeholder="Write Your thinking" className=" rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900 w-full md:ml-12  text-center sm:w-full" />
                                        </div>

                                    </div>
                                </fieldset>

                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-indigo-400">Leave feedback</button>
                            </form>
                        </section>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                </div>
            </div>
        </div>
    );
};

export default Opinion;