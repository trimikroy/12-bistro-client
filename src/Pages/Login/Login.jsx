import React, { useContext, useEffect,useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace: true});
            })

    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }



    return (
        <>
             <Helmet>
                <title>Bistro | Login</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/3 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card border-2 rounded-sm w-full max-w-[450px] ">
                        <form onSubmit={handleLogin} className="card-body py-0 pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered rounded-sm" required />

                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="type captcha" name='captcha' className="input input-bordered rounded-sm " required />
                               
                            </div>


                            <div className="form-control mt-4">
                                <button disabled={disabled} className="btn bg-amber-600 text-white rounded-sm">Login</button>
                            </div>
                        </form>
                        <div className='flex flex-col items-center my-4'>
                            <p className='text-center  text-md font-semibold text-orange-600'><small>New Here?</small> <Link to="/signUp">Create An Account</Link></p>
                            <p className='font-semibold'>or sign in with</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;