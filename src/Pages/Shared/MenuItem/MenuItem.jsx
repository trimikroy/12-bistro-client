import React from 'react';

const MenuItem = ({ item }) => {
    const { name, price, recipe, image } = item;
    return (
        <div className='w-8/12 mx-auto flex space-x-2 '>

            <img style={{borderRadius: '0 200px 200px 200px '}} className='w-[100px]' src={image} alt="" />
            <div className=''>
                <h2 className='uppercase text-xl'>{name} -----</h2>
                <p className='text-md text-gray-400'>{recipe}</p>
            </div>
            <h3 className='text-orange-500'>${price}</h3>
        </div>
    );
};

export default MenuItem;