import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AvailableTime from './AvailableTime';
import BookingModal from '../../Components/Modals/AppointBookingModal/BookingModal';
import Loading from '../../Components/Shared/Loadar/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [AvailableTimes, setAvaiablelTimes] = useState([]);
    const [treatment, setTreatment] = useState({});
    const date = format(selectedDate, 'PP');

    const { data: AvailableTimes = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = await res.json();
            
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointmentOption`)
    //         .then(res => res.json())
    //         .then(data => setAvaiablelTimes(data))
    // }, [])

    return (
        <section>
            <div className='mb-10'>
                <h1 className='text-secondary text-center'>Available Services on {format(selectedDate, 'PP')}</h1>
                <h1 className='text-center'>Please select a service.</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-5 ml-5'>

                {
                    AvailableTimes.map(time => <AvailableTime
                        key={time._id}
                        AvailableTime={time}
                        setTreatment={setTreatment}
                    ></AvailableTime>)
                }
            </div>
            <>
                {

                    <BookingModal 
                    treatment={treatment} 
                    setTreatment={setTreatment} 
                    selectedDate={selectedDate}
                    refetch={refetch}
                    ></BookingModal>
                }
            </>
        </section>
    );
};

export default AvailableAppointment;