import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { RiShoppingCartFill } from 'react-icons/ri';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }


    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/order/salad'>ORDER FOOD</Link></li>
        <li><Link to='/secret'>SECRET</Link></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn">
            <RiShoppingCartFill />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        {
            user ? <>

                <button onClick={handleLogOut} className='btn btn-ghost'>LOG OUT</button>
                <div className='w-10'>
                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                </div>
                {/* <span>{user?.displayName}</span> */}
            </> : <>
                <li><Link to='/login'>LOGIN</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-gray-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-white text-xl">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu items-center text-white menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get Started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;