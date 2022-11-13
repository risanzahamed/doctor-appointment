import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selected , setSelected}) => {

    return (
        <div>
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
                    <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    />
                    </div>
                    <div className="p-20">
                        <img src={chair} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppointmentBanner;