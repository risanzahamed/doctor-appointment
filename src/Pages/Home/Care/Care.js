import React from 'react';
import { Link } from 'react-router-dom';
import care from '../../../assets/images/treatment.png'

const Care = () => {
    return (
        <div>
            <div  className="hero  min-h-full">

                <div className="grid text-black lg:grid-cols-2">
                    
                    <div className="p-20">
                        <img src={care} alt="" srcset="" />
                    </div>

                    <div className='p-20 flex align-middle flex-col justify-center'>
                        <h1 className="mb-5 lg:text-5xl text-2xl p-5 font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className='pl-5 text-xl font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <Link to='/services'> <button className='btn btn-accent text-white capitalize mt-5 ml-5'>GET STARTED</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;