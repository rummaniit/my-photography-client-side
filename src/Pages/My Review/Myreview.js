import React, { useContext } from 'react';
import { AuthServices } from '../../context/AuthContext/AuthContext';

const Myreview = () => {
    // console.log(sr);
    const { reviews, currentUser, services } = useContext(AuthServices)
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
                                    <th className="p-3">Reviewer email</th>
                                    <th className="p-3">Review</th>
                                    <th className="p-3">Reviewer Ratings</th>
                                    <th className="p-3 text-right">Reviewer Image</th>
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
                                            <p>{allrv.email}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-400">{allrv.text}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-400">{rs.ratings}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-400"><img src={rs.img} style={imgSize} alt="" /></p>
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