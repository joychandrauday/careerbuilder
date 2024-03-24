import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Categories from '../../Component/Categories/Categories';
import Featuredjobs from '../../Component/Featuredjobs/Featuredjobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;