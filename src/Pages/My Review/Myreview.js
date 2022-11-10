import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthServices } from '../../context/AuthContext/AuthContext';
import useTitle from '../../hooks/useTitle';

const Myreview = () => {
    useTitle('My Review')
    // console.log(sr);
    const { reviews, currentUser, services, setReviews } = useContext(AuthServices)
    console.log(reviews)
    const imgSize = {
        width: '100px'
    }
    // let out = services.filter(ser => ser.sl === reviews.sl)
    // console.log(out);
    // services.filter(ser => console.log(ser.sl))
    console.log(currentUser);
    const ans = reviews.filter(rvw => rvw.email === currentUser.email)
    console.log(ans);
    // const ser = ans.find(anss => anss.sl === sr.sl)
    // console.log(ser);
    const results = services.filter(({ sl: id1 }) => ans.some(({ sl: id2 }) => id2 === id1));
    console.log(results);
    // const bal = ans.filter(allrv => results.map(rs => rs.sl === allrv.sl))
    // console.log(bal);
    let handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                let remainingCount = reviews.filter(rv => rv._id !== id)
                setReviews(remainingCount)
                console.log(remainingCount);
            })
    }
    const nevigate = useNavigate()

    const handleUpdate = (id) => {
        nevigate(`/update/${id}`)
        // fetch(`http://localhost:5000/reviews/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviews)
        // }).then(res => res.json())
        //     .then(data => console.log(data))
    }
    return (
        <div>

            <div>

                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My reviews</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">

                            <thead className="dark:bg-gray-700">
                                <tr className="text-center">
                                    {/* <th className="p-3">Review Serial</th> */}
                                    <th className="p-3">Service Name</th>
                                    <th className="p-3 text-right">Service Image</th>
                                    <th className="p-3">Review</th>
                                    <th className="p-3">Delete</th>
                                    <th className="p-3">Update</th>
                                    {/* <th className="p-3">Service Image</th> */}
                                </tr>
                            </thead>
                            {
                                ans.map(allrv => results.map(rs => <>{rs.sl === allrv.sl ? <tbody>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        {/* <td className="p-3">
                                            <p>{rs.sl}</p>
                                        </td> */}
                                        <td className="p-3">
                                            <p>{rs.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-400"><img src={rs.img} style={imgSize} alt="" /></p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-400">{allrv.text}</p>
                                        </td>

                                        <td className="p-3">
                                            <button className="text-red-700 p-3" onClick={() => handleDelete(allrv._id)}>Delete</button>
                                        </td>

                                        <td className="p-3">
                                            <button className="text-orange-400 p-3" onClick={() => handleUpdate(allrv._id)}>Update</button>
                                        </td>

                                    </tr>

                                </tbody> : ''}</>)



                                )
                            }
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Myreview;