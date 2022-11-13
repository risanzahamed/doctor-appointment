import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div className='mt-14'>
            <div id='herosection' className="hero  min-h-full"
                style={
                    {
                        backgroundImage:

                            `url(${appointment})`
                    }

                }>

                <div className="grid text-black lg:grid-cols-2">

                    <div className="p-20 -mt-52">
                        <img className='w-100' src={doctor} alt="" srcset="" />
                    </div>

                    <div className='p-20 flex align-middle flex-col justify-center text-white'>
                        <h1 className="mb-5 lg:text-5xl text-2xl p-5 font-bold">Your New Smile Starts Here</h1>
                        <p className='pl-5 text-xl font-medium'>It is a long established fact that a reader will be distracted by the readable content.</p>

                        <Link to='/services'> <button className='btn btn-accent text-white capitalize mt-5 ml-5'>GET STARTED</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;