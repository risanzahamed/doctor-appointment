import React from 'react';

const Testimonial = () => {
    return (
        <section class="bg-white dark:bg-gray-900 mt-10">
    <div class="container px-6 py-10 mx-auto">
        <div class="mt-6 md:flex md:items-center md:justify-between">
            <div>
                <p className='text-2xl font-semibold text-[#19D3AE]'>Testimonial</p>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                What Our Patients Says
                </h1>
            </div>
        </div>

        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div class="p-8  rounded-lg shadow-lg ">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span class="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>
            <div class="p-8  rounded-lg shadow-lg ">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span class="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>
            <div class="p-8  rounded-lg shadow-lg ">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span class="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>

           
        </section>
    </div>
</section>
    );
};

export default Testimonial;