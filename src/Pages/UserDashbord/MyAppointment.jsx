import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Shared/Loadar/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myAppointments?email=${user?.email}`;

    const { data: myAppointments = [], isLoading } = useQuery({
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

    if(isLoading){
        return <Loading></Loading>
    }

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
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAppointments.map((appointment, i) => <tr key={appointment._id}>
                            <th>{i + 1}</th>
                            <td>{user.displayName}</td>
                            <td>{appointment.service}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.selectedDate}</td>
                            <td>
                                {
                                    appointment?.price
                                }
                            </td>
                            <td>
                                {
                                    appointment?.price && !appointment.paid && <Link to={`/dashbord/payment/${appointment._id}`}>
                                        <button className='btn btn-outline btn-success btn-xs ml-5'> Payment</button>
                                    </Link>
                                }
                                {
                                    appointment?.price && appointment.paid && <span className='text-success ml-5'> Paid</span>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;