import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect( () => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha= () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value) == true){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/3 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card  w-full max-w-[450px] ">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="type captcha" name='captcha' className="input input-bordered rounded-sm" required />
                            <button  onClick={handleValidateCaptcha} className='btn btn-outline btn-sm rounded-sm'>Validate</button>
                        </div>


                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn bg-amber-600 text-white rounded-sm">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;