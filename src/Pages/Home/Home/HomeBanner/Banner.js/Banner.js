import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../../../assets/images/chair.png'
import bg from '../../../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div className='py-32'>
            <div id='herosection' className="hero  min-h-full"
                style={
                    {
                        backgroundImage:

                            `url(${bg})`
                    }

                }>

                <div className="grid text-black lg:grid-cols-2">
                    <div className='p-20'>
                        <h1 className="mb-5 lg:text-5xl text-2xl p-5 font-bold">Your New Smile Starts Here</h1>
                        <p className='pl-5 text-xl font-medium'>It is a long established fact that a reader will be distracted by the readable content.</p>

                        <Link to='/services'> <button className='btn btn-accent text-white capitalize mt-5 ml-5'>GET STARTED</button></Link>
                    </div>
                    <div className="p-20">
                        <img src={chair} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;