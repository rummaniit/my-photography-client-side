import React, { useContext } from 'react';
import { AuthServices } from '../../../context/AuthContext/AuthContext';
import Showservices from './Showservices';

const Services = () => {
    const { services } = useContext(AuthServices)
    console.log(services);
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {
                    services.map(service => <Showservices
                        key={service._id}
                        service={service}
                    ></Showservices>)
                }
            </div>
        </div>
    );
};

export default Services;