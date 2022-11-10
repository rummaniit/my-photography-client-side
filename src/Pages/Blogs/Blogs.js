import React, { useContext } from 'react';
import { AuthServices } from '../../context/AuthContext/AuthContext';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    const { currentUser } = useContext(AuthServices)
    return (
        <div className='grid grid-cols-1 gap-4  m-10 md:grid-cols-2'>
            <div className="max-w-md p-6 mx-auto mt-10 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">Difference between SQL and NoSQL</h2>
                    <p className="mt-4 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium"></h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 mx-auto mt-10 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What is JWT, and how does it work?</h2>
                    <p className="mt-4 dark:text-gray-400">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        .</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium"></h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 mx-auto mt-10 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What is the difference between javascript and NodeJS?</h2>
                    <p className="mt-4 dark:text-gray-400">JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                        .</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium"></h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 mx-auto mt-10 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className="mt-4 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        .</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium"></h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;