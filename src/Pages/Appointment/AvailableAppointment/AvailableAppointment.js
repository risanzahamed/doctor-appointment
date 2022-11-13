import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selected }) => {
    const [options, setOptions] = useState([])

    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setOptions(data))
    },[])
    return (
        <div>
            <p className='text-center text-xl font-semibold text-[#19D3AE]'>Available Appointments on {format(selected, 'PP')}</p>


            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3'>
                {
                    options.map(option => <AppointmentOptions
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    >

                    </AppointmentOptions>)
                }
            </div>


            {   treatment &&
                <AppointmentModal
                treatment={treatment}
                selected={selected}
                setTreatment={setTreatment}
                >
    
                </AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;