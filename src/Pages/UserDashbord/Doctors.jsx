import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Shared/Loadar/Loading';
// import { AuthContext } from '../../Context/AuthProvider';
import ConfirmationModal from './Modal/ConfirmationModal';
import { toast } from 'react-hot-toast';


const Doctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);


    const { data: allDoctors = [], isLoading, refetch } = useQuery({
        queryKey: ['allDoctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashbord/allDoctors`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })

    const handleDelete = _id => {
        // console.log(_id);
        fetch(`http://localhost:5000/doctors/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    toast.success('Doctor deleted successfully.')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDoctors &&
                            allDoctors.map((doctor, i) => <tr
                                key={doctor._id}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="DoctorImage" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.specialty}</td>
                                <td>{doctor.email}</td>
                                <th>
                                    {/* <button className="btn btn-outline btn-error btn-xs"
                                        onClick={() => handleDelete(doctor._id)}
                                    >Delete</button> */}
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="my_modal_6" className="btn btn-outline btn-error btn-xs">Delete Doctor</label>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
            {
                deleteDoctor &&
                <ConfirmationModal
                    deleteDoctor={deleteDoctor}
                    successAction={handleDelete}
                    modalData={deleteDoctor}
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteDoctor.name} please click confirm buton.`}
                ></ConfirmationModal>
            }
        </section>
    );
};

export default Doctors;