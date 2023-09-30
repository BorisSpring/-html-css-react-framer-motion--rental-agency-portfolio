import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const cars = [
  {
    type: 'Hatchback',
    name: 'Ford Focus',
    price: 29,
    star: 3.5,
    image: '/assets/images/carSlider/car01.svg',
    info: [
      {
        icon: '/assets/icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: '/assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: '/assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: '/assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: '/assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Sedan',
    name: 'Toyota Corolla',
    price: 25,
    star: 5,
    image: '/assets/images/carSlider/car02.svg',
    info: [
      {
        icon: '/assets/icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: '/assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: '/assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: '/assets/icons/carSlider/engine.svg',
        text: '1800 HP',
      },
      {
        icon: '/assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 35,
    star: 4.7,
    image: '/assets/images/carSlider/car03.svg',
    info: [
      {
        icon: '/assets/icons/carSlider/gearshift.svg',
        text: 'Automatic',
      },
      {
        icon: '/assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: '/assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: '/assets/icons/carSlider/engine.svg',
        text: '2225 HP',
      },
      {
        icon: '/assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Convertible',
    name: 'Mazda MX-5',
    price: 32,
    star: 4.9,
    image: '/assets/images/carSlider/car03.svg',
    info: [
      {
        icon: '/assets/icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: '/assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: '/assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: '/assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: '/assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <div className='container '>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          670: { slidesPerView: 2, spaceBetween: 20 },
          1295: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className=' mx-auto max-w-[320px] sm:max-w-none'
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index} className='mx-auto'>
            <motion.div
              variants={fadeIn(
                index % 2 === 0 ? 'up' : 'down',
                'tween',
                1,
                0.5
              )}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.25 }}
              className='bg-slate-100 h-[330px] w-[320px] mx-auto flex flex-col justify-between'
            >
              <img
                src={car.image}
                alt={car.name}
                className='h-[150px] m-auto'
              />
              <div className='px-3 pb-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-slate-700'>{car.type}</p>
                  <div className='flex'>
                    <FaStar className='w-3 h-3 text-accent-default' />
                    <FaStar className='w-3 h-3 text-accent-default' />
                    <FaStar className='w-3 h-3 text-accent-default' />
                    <FaStar className='w-3 h-3 text-accent-default' />
                  </div>
                </div>
                <div className='flex flex-col '>
                  <p className='font-[500]'>{car.name}</p>
                  <p className='font-bold text-accent-default mb-2'>
                    {car.price}&euro; / Day
                  </p>
                  <div className='flex justify-between '>
                    {car.info.map((info) => (
                      <div
                        className='flex flex-col justify-center'
                        key={info.text}
                      >
                        <p className='w-10 h-10 bg-primary flex items-center justify-center rounded-full'>
                          <img src={info.icon} alt={info.text} />
                        </p>
                        <p className='text-xs'>{info.text}</p>
                      </div>
                    ))}
                  </div>
                  <button className='px-2 py-1 bg-accent-default text-white rounded-[10px] hover:bg-accent-hover  transition-all duration-300 my-2'>
                    See details
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSlider;
