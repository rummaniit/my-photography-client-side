import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    useTitle('Update Pages')
    const review = useLoaderData()
    const handleform = (e) => {
        e.preventDefault()
        const form = e.target
        // const ratings = form.ratings.value
        const text = form.text.value

        let body = {
            text: text
        }
        // console.log(body);
        fetch(`https://my-photography-server-side-2.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
            .then(data => {
                form.reset()
                // setAbc(data)
                // console.log(data);
                alert('Updated')

            })
        // console.log(abc);
        // console.log(info);

        // setAbc(info)

    }
    return (
        <div>
            <form onSubmit={handleform} className="text-xl text-center font-semibold">
                {review._id}
                <label htmlFor="">Review</label>
                <br />
                <input type="text" name='text' className='text-center' defaultValue={review?.text} />
                <br />

                <button type='submit' className='font-bold text-white rounded p-4 mt-4 bg-purple-700'>Update User</button>

            </form>
        </div>
    );
};

export default Update;