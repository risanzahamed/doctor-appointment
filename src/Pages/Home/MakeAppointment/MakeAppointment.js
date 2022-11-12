import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../assets/images/doctor-small.png';

const MakeAppointment = () => {
    return (
        <div className="hero mt-20   min-h-0" style={{ backgroundImage: `url("http://jituchauhan.com/physiotherapy/physiotherapy-blue/images/slider-3.jpg")` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <section className="dark:bg-gray-800 mt-20 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={doctor} alt="" className='-mt-20' />
                    </div>
                    <div className="flex flex-col text-white justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <p className='text-xl font-semibold text-[#19D3AE]'>Appointment</p>
                        <h1 className="text-3xl font-semibold mt-5 leading-none">Make an appointment Today
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <Link to='/services'> <button className='btn btn-accent text-white capitalize mt-5 '>GET STARTED</button></Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;