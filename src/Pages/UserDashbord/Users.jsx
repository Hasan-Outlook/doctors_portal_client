import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Shared/Loadar/Loading';

const Users = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully.')
                }
                refetch(data);
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto ml-5 mt-5">
            <h1 className='text-3xl text-center mb-5'>All Users Are Here.</h1>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-outline btn-success'>Add Admin</button>
                                }
                            </td>
                            <td><button className='btn btn-outline btn-error'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;