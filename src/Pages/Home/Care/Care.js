import React from 'react';
import { Link } from 'react-router-dom';
import care from '../../../assets/images/treatment.png'

const Care = () => {
    return (
        <section className="dark:bg-gray-800 mt-20 dark:text-gray-100 pb-16">
            <div className="container flex flex-col   sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center mt-24  ml-16   lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img className='w-2/3 mt-20 ' src={care} alt=''/>
                </div>
                <div className="flex flex-col w-full  text-center rounded-sm  xl:max-w-lg lg:text-left">
                    <h1 className="text-4xl font-semibold leading-none sm:text-6xl">Exceptional Dental Care, on Your Terms
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <Link to='/services'> <button className='btn text-white font-semibold btn-accent capitalize mt-5 ml-5'>GET STARTED</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Care;