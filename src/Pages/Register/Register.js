import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthServices } from '../../context/AuthContext/AuthContext';

const Register = () => {

    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'

    const { createUser } = useContext(AuthServices)
    // console.log(users);

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const imgurl = form.imgurl.value
        const password = form.password.value
        const Cpassword = form.Cpassword.value
        const userInfo = {
            name, imgurl, password, Cpassword, email
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => {
                res.json()
            })
            .then(info => {
                console.log(info)
                // setLoading(true)
                // console.log(info)
            })

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                // setUsers(user)
                // console.log(users);
                // setcurrentUser(userInfo)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
        // console.log(userInfo, password, Cpassword);

    }
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 w-full mx-auto mt-16 mb-10 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">Please Sign Up</p>
                </div>
                <form novalidate="" action="" onSubmit={handleRegister} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">User Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="imgurl" className="block mb-2 text-sm">Image Url</label>
                            <input type="text" name="imgurl" id="imgurl" placeholder="Enter Your Image Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter Your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Confirm Password</label>
                            <input type="password" name="Cpassword" id="Cpassword" placeholder="Enter Your password again" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign Up</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
                            <Link rel="noopener noreferrer" to='/login' className="hover:underline dark:text-violet-400">Sign In</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;