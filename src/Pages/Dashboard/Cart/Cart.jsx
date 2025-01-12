import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    
    const handleDelete = id => {
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

                axiosSecure.delete(`/carts/${id}`)
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
        <div className='flex flex-col items-center p-12 '>
            {/* <SectionTitle subHeading={'my cart'} heading={'add more ?'}></SectionTitle> */}
            <div className='flex justify-between px-8 items-center w-full uppercase'>
                <h1 className='text-lg font-semibold'>Total Orders: {cart.length}</h1>
                <h1 className='text-lg font-semibold'>Total Price:  ${totalPrice} </h1>
                <button className='btn '>Pay</button>

            </div>
            <div className="overflow-x-auto w-full mt-4 rounded-xl">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-200 '>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>

                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt /></button>
                                    </th>
                                </tr>
                            )
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;