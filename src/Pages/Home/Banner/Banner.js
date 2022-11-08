import React from 'react';
import imgbanner from '../../../images/banner.svg'

const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 mt-10 mb-6 pl-12 md:grid-cols-2 '>
                <div>
                    <img src={imgbanner} alt="" />
                </div>
                <div className='flex items-center text-center md:ml24'>
                    <div>
                        <h1 className="text-5xl font-semibold text-white">Photo Captures</h1>
                        <h1 className='text-3xl text-purple-600 font-semibold mb-2'>The Best Memory</h1>
                        <h1 className='text-white'>Photography is the art, application, and practice of creating durable images by recording light, either electronically </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;