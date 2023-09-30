import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const testimonialData = [
  {
    message:
      'The truly exceeded my expectations and made my car rental experience a delight',
    avatar: '/assets/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & videographer',
  },
  {
    message:
      'The truly exceeded my expectations and made my car rental experience a delight',
    avatar: '/assets/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & videographer',
  },

  {
    message:
      'The truly exceeded my expectations and made my car rental experience a delight',
    avatar: '/assets/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & videographer',
  },
];

const Testemonial = () => {
  return (
    <sectiion
      id='Testemonial'
      className='container m-auto h-screen flex justify-center pt-[148px] px-[20px] xl:pt-[200px]'
    >
      <Swiper
        modules={[Pagination]}
        className='max-h-[400px] lg:max-h-[450px] '
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {testimonialData.map(({ message, avatar, name, job }, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center justify-center max-w-[700px]  m-auto '>
              <FaQuoteLeft className='mb-5 w-[35px] md:w-[50px] xl:w-[70px] h-[35px] md:h-[50px] xl:h-[70px] text-accent-default' />
              <h3 className='mb-12 font-[600] text-center text-[20px] md:text-[24px] lg:text-[28px] leading-6 md:leading-8 lg:leading-10'>
                {message}
              </h3>
              <img
                className='mb-2'
                src={avatar}
                alt='User who left testemonial about service...'
              />
              <p>{name}</p>
              <p>{job}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </sectiion>
  );
};

export default Testemonial;
