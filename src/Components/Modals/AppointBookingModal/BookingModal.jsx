import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBookingForm = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const pname = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const price = form.price.value;

        const booking = {
            name: pname,
            price: price,
            phone: phone,
            email: email,
            slot: slot,
            selectedDate: date,
            service: name
        }
        console.log(booking);
        form.reset();

        fetch(`http://localhost:5000/appointment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    // setTreatment('');
                    // this.handleclosemodal();
                    toast.success('You successfully booked an appointment.')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <section>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="myModal6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBookingForm}>
                        <input name='date' type="text" value={date} className="input input-bordered input-info w-full mb-4 mt-5" disabled />

                        <select name='slot' className="select select-info w-full mb-4" value={slots?.[0]}>
                            <option disabled selected >{slots?.[0]}</option>
                            {
                                slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='price' type="text" value={price} className="input input-bordered input-info w-full mb-4 mt-5" disabled />

                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered input-info w-full mb-4" />
                        <input name='phone' type="number" placeholder="Your Phone Number" required className="input input-bordered input-info w-full mb-4" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" required className="input input-bordered input-info w-full mb-4" />
                        <button className="btn btn-active btn-neutral  w-full">Submit</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="myModal6" className="btn btn-outline w-full">Close</label>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BookingModal;