import { format } from 'date-fns';
import React from 'react';


const AppointmentModal = ({ treatment, selected, setTreatment }) => {

    const {name, slots} = treatment
    const date = format(selected, 'PP')


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const fullname = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value
        const slot = form.slot.value

        // console.log(date, name, email, phone);

        const booking ={
            treatment : name,
            AppointmentDate : date,
            patienName :fullname,
            slot,
            email,
            phone,
        }

        console.log(booking);


        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="flex w-100 mt-5 text-center dark:bg-gray-900 dark:text-gray-100">
                        <form onSubmit={handleBooking} className="flex flex-col w-96 mx-auto  rounded  dark:text-gray-100 ng-untouched ng-pristine ng-valid">


                            <input id="date" type="text" value={date} disabled className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                            <select name='slot' className="select select-bordered w-full  flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border">
                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>


                            <input name='name' id="name" type="text" placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />
                            <input id="phone" name='phone' type="tel" placeholder='Phone Numbers' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />
                            <input id="email" type="email" name='email' placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />
                           

                            <input className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 btn btn-accent text-white dark:text-gray-900" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;