import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myAppointments?email=${user?.email}`;

    const { data: myAppointments = [] } = useQuery({
        queryKey: ['myAppointments', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className="overflow-x-auto ml-5 mt-5">
            <h3 className='text-3xl mb-5'>My Appointment</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAppointments.map((appointment, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{user.displayName}</td>
                            <td>{appointment.service}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.selectedDate}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;