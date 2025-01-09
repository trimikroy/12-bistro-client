import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { AiFillFire } from 'react-icons/ai';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-10/12 mx-auto ">


                {
                    reviews.map((review) =>
                        <SwiperSlide
                            key={review._id}

                        >


                            <div className='flex flex-col m-24 text-center items-center'>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <AiFillFire className='' />
                                <p>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;