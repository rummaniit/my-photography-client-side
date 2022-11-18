import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthServices } from '../../context/AuthContext/AuthContext';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const { signIn, loginWithGoogle, setErrors, errors } = useContext(AuthServices)


    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'


    useTitle('Sign In')
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userInfo = {
            email, password
        }
        signIn(email, password)
            .then(result => {
                const user = result.user
                const present = {
                    email: user.email
                }
                console.log(present);
                fetch('https://my-photography-server-side-2.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(present)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true })
                    })
                form.reset()
            })
            .catch(error => {
                setErrors(error.message)
            })
        console.log(userInfo);

    }
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        loginWithGoogle(provider)
            .then(result => {
                const user = result.user
                console.log(user);
                setErrors(' ')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div>
                <div className="w-full mx-auto mt-16 mb-10 max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                    <p className="text-sm text-center dark:text-gray-400">Dont have account?
                        <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                    </p>
                    <div className="my-6 space-y-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400" onClick={handleGoogleSignIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>

                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <form novalidate="" onSubmit={handleLogin} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label for="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <label for="email" className="block text-sm">Password</label>
                                <input type='password' name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                                </div>

                            </div>
                        </div>
                        {
                            errors ? <h1 className='text-red-700'>{errors}</h1> : ''
                        }
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;