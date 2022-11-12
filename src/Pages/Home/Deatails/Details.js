import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'



const Details = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                    <div className="p-12 bg-[#19D3AE] border rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            
                                <img src={icon1} alt="" srcset="" />
                            

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-2xl font-medium text-white  capitalize dark:text-white">Opening Hours</h1>

                                <p className="mt-3 text-white  dark:text-gray-300">
                                    Lorem Ipsum is simply dummy text of the pri
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 border bg-[#3A4256] rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                           
                            <img src={icon2} alt="" srcset="" />
                           

                            <div className="mt-4 md:mx-4 md:mt-0 text-white">
                                <h1 className="text-2xl font-medium  capitalize dark:text-white">Visit our location</h1>

                                <p className="mt-3  dark:text-gray-300">
                                Brooklyn, NY 10036, United States
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-12 border  bg-[#19D3AE] rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            <img src={icon3} alt="" srcset="" />
                            <div class="mt-4 md:mx-4 md:mt-0 text-white">
                                <h1 class="text-2xl font-medium  capitalize dark:text-white">Contact us now</h1>
                                <p class="mt-3  dark:text-gray-300">
                                +000 123 456789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;