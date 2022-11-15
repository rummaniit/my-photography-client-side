import React, { useContext } from 'react';
import { AuthServices } from '../../context/AuthContext/AuthContext';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services')
    const { services, setServices, currentUser } = useContext(AuthServices)
    // console.log(currentUser);
    const handleService = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const ratings = form.ratings.value
        const author = form.author.value
        const des = form.des.value
        const img = form.Simg.value
        const author_img = form.Aimg.value
        const price = form.price.value
        const sl = parseInt(form.sl.value)
        // window.location.reload()
        const serviceInfo = {
            name, ratings, author, des, img, author_img, price, sl
        }
        // console.log(serviceInfo);

        fetch('https://my-photography-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => {
                res.json()
                alert("Added to Database")
                form.rest()
            })
            .then(info => {
                console.log(info)
                setServices([...services, info])
            })
    }
    return (
        <div className='mt-10 border p-12 w-96 mx-auto text-center'>
            <h1 className='text-2xl font-bold m-10 text-purple-500'>AddServices</h1>
            <form action="" onSubmit={handleService}>
                <label htmlFor="">Serial</label>
                <br />
                <input type="text" defaultValue={services.length + 1} className='m-2 text-center' name="sl" id="" />
                <br />
                <label htmlFor="">Name</label>
                <br />
                <input type="text" className='m-2 text-center' name="name" id="" />
                <br />
                <label htmlFor="">Ratings</label>
                <br />
                <input type="text" className='m-2 text-center' name="ratings" id="" />
                <br />
                <label htmlFor="">Price</label>
                <br />
                <input type="text" className='m-2 text-center' name="price" id="" />
                <br />
                <label htmlFor="">Author</label>
                <br />
                <input type="text" className='m-2 text-center' name="author" id="" />
                <br />
                <label htmlFor="">Description</label>
                <br />
                <input type="text" className='m-2 text-center' name="des" id="" />
                <br />
                <label htmlFor="">Service image url</label>
                <br />
                <input type="text" className='m-2 text-center' name="Simg" id="" />
                <br />

                <label htmlFor="">Author Image Url</label>
                <input type="text" defaultValue={currentUser.photoURL} className='m-2' name="Aimg" id="" />
                <br />
                <button className='bg-purple-700 text-white p-3  rounded-md mt-2'>Save To Datebase</button>
            </form>
        </div>
    );
};

export default AddServices;