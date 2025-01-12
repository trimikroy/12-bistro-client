import React from 'react';
import { FaBook, FaCalendar, FaCartArrowDown,  FaHome, FaUsers, } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { IoMdMenu } from 'react-icons/io';
import { MdContactMail, MdFastfood, MdPayment } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { CiBoxList } from 'react-icons/ci';

const Dashboard = () => {
    const [cart] = useCart();

    //ToDo: get isAdmin value from the database 
    const isAdmin = true;


    return (
        <div className='flex'>
            {/* dashboard sidebar */}
            <div className='w-64 min-h-screen bg-orange-500 flex flex-col items-start'>
                <div className='flex flex-col  pl-8 mt-8  w-full '>
                    <p className='uppercase text-3xl font-bold'>Bistro Boss </p>
                    <small className='uppercase text-2xl font-semibold '>Restaurant</small>
                </div>
                <ul className='menu w-full mt-2 text-md font-semibold  p-4'>
                    {
                        isAdmin ? <>

                             {/* admin sidebar */}
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome />Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                <MdFastfood />Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                <CiBoxList />Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'>
                                    <FaBook />Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUsers'>
                                    <FaUsers />All Users
                                </NavLink>
                            </li>
                            
                        </> : <>


                             {/* user Sidebar */}
                            <li>
                                <NavLink to='/dashboard/userHome'>
                                    <FaHome />User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'>
                                    <FaCalendar />Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'>
                                    <MdPayment />Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'>
                                    <FaCartArrowDown />My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addReview'>
                                    <VscPreview />Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myBooking'>
                                    <FaBook />My Booking
                                </NavLink>
                            </li>
                        </>
                    }

                    {/* shared nav links */}
                    <div className='divider '></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <IoMdMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <GiShoppingBag /> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <MdContactMail />Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1  '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;