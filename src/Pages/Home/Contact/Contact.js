import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div>
            <div className='mt-14'>
                <div id='herosection' className=""
                    style={
                        {
                            backgroundImage:

                                `url(${appointment})`
                        }

                    }>

                    <div className=" text-white ">

                        <div className="p-20 w-100">
                            <h1 class=" mb-4 text-center font-bold text-[#19D3AE] capitalize  dark:text-white">Contact Us</h1>
                            <h1 class="text-2xl text-center font-semibold text-white capitalize dark:text-white">Stay connected with us</h1>
                            <div className="flex w-100 mt-5 text-center dark:bg-gray-900 dark:text-gray-100">
                                <form novalidate="" action="" className="flex flex-col w-96 mx-auto  rounded  dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                                    <input id="username" type="email" placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                                    <input id="text" type="text" placeholder='Subject' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                                    <textarea className="textarea mt-2 text-black" placeholder="Your message "></textarea>

                                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 btn btn-accent text-white dark:text-gray-900">Submit</button>
                                </form>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;