import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return (res.data)
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            };
        });
    }

    return (
        <div>
            <div className='flex justify-around mt-12  '>
                <h1 className='text-2xl font-bold'>All Users</h1>
                <h1 className='text-2xl font-bold'>Total Users: {users.length}</h1>

            </div>
            <div className="overflow-x-auto w-10/12 mx-auto mt-4 ">
                <table className="table ">
                    {/* head */}
                    <thead className='bg-gray-300 rounded-2xl'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) =>

                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <p className='text-green-600 font-semibold'>{'admin'}</p> :
                                                <button onClick={() => handleMakeAdmin(user)} className='btn bg-yellow-600'> <FaUsers className='text-white '></FaUsers> </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className='btn bg-red-800 '> <FaTrash className='text-white'></FaTrash> </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;