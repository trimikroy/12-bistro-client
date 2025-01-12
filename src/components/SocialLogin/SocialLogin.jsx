import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

        })
        
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline mt-2'>
                <FaGoogle className='text-orange-400 text-lg'></FaGoogle>
               
            </button>
        </div>
    );
};

export default SocialLogin;