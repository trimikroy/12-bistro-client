import React from 'react';
import './BistroBanner.css';
const BistroBanner = () => {
    return (
        <div className='bistro-banner w-10/12 h-[450px] mx-auto bg-cover flex items-center justify-center bg-opacity-70'>
            
            <div className='w-8/12 h-[250px] mx-auto bg-white absolute text-center items-center justify-center flex flex-col p-16 space-y-4 '>
                <h1 className='text-3xl uppercase'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBanner;