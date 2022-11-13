import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [selected , setSelected] = useState( new Date ())
    return (
        <div>
             {/* 1st section */}

            <AppointmentBanner
            selected={selected}
            setSelected={setSelected}
            
            />


            {/* 2nd section */}
            
            <AvailableAppointment
            selected={selected}
            setSelected={setSelected}
            />



        </div>
    );
};

export default Appointment;