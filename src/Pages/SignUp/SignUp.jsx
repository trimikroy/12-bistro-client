import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire("user profile update successful");
                                    navigate("/")
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })


    }

    // const handleSignUp = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name,email, password)
    // }
    return (
        <>
            <Helmet>
                <title>Bistro | SignUp</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/3 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card border-2 rounded-sm w-full max-w-[450px] ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Your name" className="input input-bordered rounded-sm" />
                                {errors.name && <span className='text-sm text-red-700'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Your Photo URL" className="input input-bordered rounded-sm" />
                                {errors.photoURL && <span className='text-sm text-red-700'>Photo URL is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered rounded-sm" />
                                {errors.email && <span className='text-sm text-red-700'>Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,

                                })} placeholder="password" name='password' className="input input-bordered rounded-sm" />
                                {errors.password?.type === "required" && (
                                    <p className='text-red-600' role="alert">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-600' role="alert">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-600' role="alert">Password must be 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-600' role="alert">Password must one uppercase one lower case one special character and one number </p>
                                )}

                            </div>



                            <div className="form-control mt-4">
                                <button type='submit' className="btn bg-amber-600 text-white rounded-sm">SignUp</button>
                            </div>
                        </form>
                        <div className='flex flex-col items-center my-4'>
                            <p className='text-center  text-md font-semibold text-orange-600'><small>Already Register?</small> <Link to="/login">Go to login</Link></p>
                            <p className='font-semibold'>or sign in with</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;