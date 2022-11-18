import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    useTitle('Update Pages')
    const review = useLoaderData()
    console.log(review);
    const [abc, setAbc] = useState(review)
    console.log(abc);
    // const handleUpdate = (id) => {

    //     // nevigate(`/update/${id}`)

    // }
    const handleform = (e) => {
        e.preventDefault()
        const form = e.target
        // const ratings = form.ratings.value
        const text = form.rev.value
        let info = {
            text: text
        }
        fetch(`https://my-photography-server-side-2.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(info)
        })
            .then(data => {
                // setAbc(data)
                console.log(data);
                alert('Updated')
                form.reset()

            })
        // console.log(abc);
        console.log(info);

        // setAbc(info)

    }
    return (
        <div>
            <form onSubmit={handleform} className="text-xl text-center font-semibold">

                <label htmlFor="">Review</label>
                <br />
                <input type="text" name='rev' className='text-center' defaultValue={review.text} />
                <br />
                <Link>
                    <button className='font-bold text-white rounded p-4 mt-4 bg-purple-700'>Update User</button>
                </Link>
            </form>
        </div>
    );
};

export default Update;