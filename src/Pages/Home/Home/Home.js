import React from 'react';
import Banner from '../Banner/Banner';
import Hireme from '../Hireme/Hireme';
import Showservicetohome from './Showservicetohome/Showservicetohome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Showservicetohome></Showservicetohome>
            <Hireme></Hireme>
        </div>
    );
};

export default Home;