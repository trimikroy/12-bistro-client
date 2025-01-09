import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-items bg-fixed text-white pt-4'>
            <SectionTitle 
                subHeading='check it out'
                heading='Featured Items' 
            ></SectionTitle>
            <div className='md:flex justify-center bg-opacity-70 items-center gap-8 pt-10 pb-20 px-4 my-4 w-10/12 mx-auto '>
                <div>
                    <img className='w-[400px] ' src={featuredImage} alt="" />
                </div>
                <div className='w-[500px] space-y-2 '>
                    <p>January 2 2025</p>
                    <h3 className='uppercase text-lg'>Where Can I get Some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, modi inventore? Facere eveniet dolores recusandae accusantium id quisquam, ad dolore.</p>
                    <button className="btn btn-outline  border-0 border-b-4 border-b-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;