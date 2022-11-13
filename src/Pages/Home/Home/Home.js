import React from 'react';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Details from '../Deatails/Details';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './HomeBanner/Banner.js/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Details/>
            <Services/>
            <Care/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;