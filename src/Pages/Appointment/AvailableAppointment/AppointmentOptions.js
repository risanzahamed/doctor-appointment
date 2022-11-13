import React from 'react';

const AppointmentOptions = ({option, setTreatment}) => {
    const {name, slots} = option

    return (
        <div>
            <div class="flex flex-col items-center p-6 space-y-3 text-center shadow-lg rounded-xl dark:bg-gray-800">
                <h1 class="text-2xl text-center text-[#19D3AE] font-semibold  capitalize dark:text-white">{name}</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    {slots.length > 0 ? slots[0] : 'try again'}
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE 
                </p>
                <label 
                disabled={slots.length === 0}
                onClick={()=>setTreatment (option)}
                htmlFor="booking-Modal" 
                className="btn btn-accent text-white capitalize mt-5 ml-5"
                >Book Appointment</label>
            </div>

        </div>
    );
};

export default AppointmentOptions;