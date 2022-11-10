import React, { useContext } from 'react';
import { AuthServices } from '../../../context/AuthContext/AuthContext';
import useTitle from '../../../hooks/useTitle';
import Myreview from '../../My Review/Myreview';
import Showservices from './Showservices';

const Services = () => {
    useTitle('All Services')
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