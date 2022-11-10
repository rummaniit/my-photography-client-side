import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    useTitle('Update Pages')
    const review = useLoaderData()
    console.log(review);
    const [abc, setAbc] = useState(review)
    console.log(abc);
    const handleUpdate = (id) => {

        // nevigate(`/update/${id}`)
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(abc)
        }).then(res => res.json())
            .then(data => {
                alert('Updated')

            })
        console.log(abc);
    }
    const handleform = (e) => {
        e.preventDefault()
        const form = e.target
        const ratings = form.ratings.value
        const rev = form.rev.value
        let info = {
            ratings, rev
        }
        console.log(info);
        form.reset()
        setAbc(info)

    }
    return (
        <div>
            <form onSubmit={handleform} className="text-xl text-center font-semibold">
                <label htmlFor="">Ratings</label>
                <br />
                <input type="text" name="ratings" defaultValue={review.ratings} id="" className='text-center mb-5' />
                <br />
                <label htmlFor="">Review</label>
                <br />
                <input type="text" name='rev' className='text-center' defaultValue={review.text} />
                <br />
                <Link onClick={() => handleUpdate(review._id)}>
                    <button className='font-bold text-white rounded p-4 mt-4 bg-purple-700'>Update User</button>
                </Link>
            </form>
        </div>
    );
};

export default Update;