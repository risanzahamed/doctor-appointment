import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'

const Services = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class=" mb-4 text-center font-bold text-[#19D3AE] capitalize  dark:text-white">OUR SERVICES</h1>
                <p className='text-center text-4xl'>Services We Provide</p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div class="flex flex-col items-center p-6 space-y-3 text-center shadow-lg rounded-xl dark:bg-gray-800">
                        <img src={fluoride} alt="" srcset="" />

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Fluoride Treatment</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                        </p>
                    </div>

                    <div class="flex flex-col items-center p-6 space-y-3 text-center shadow-lg rounded-xl dark:bg-gray-800">
                        <img src={fluoride} alt="" srcset="" />

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Cavity Filling</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                        Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                        </p>
                    </div>

                    <div class="flex flex-col items-center p-6 space-y-3 text-center shadow-lg rounded-xl dark:bg-gray-800">
                        <img src={fluoride} alt="" srcset="" />

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Teeth Whitening</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                        Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;