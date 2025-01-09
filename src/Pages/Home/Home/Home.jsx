import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBanner from '../../../components/BistroBanner/BistroBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Bistro | Home</title>
                </Helmet>
                <Banner></Banner>
                <Category></Category>
                <BistroBanner></BistroBanner>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
        </>
    );
};

export default Home;