import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import CarSlider from './CarSlider';
const brand = ['audi', 'bmw', 'ford', 'mazda', 'mercedes', 'skoda'];
const Cars = () => {
  const isDesktopMode = useMediaQuery({ query: '(min-width: 1300px)' });
  return (
    <div
      className='h-screen container mx-auto flex flex-col  justify-evenly'
      id='Cars'
    >
      <div className='grid grid-cols-2 xl:flex xl:flex-row  gap-y-3 xl:gap-y-0 xl:justify-between'>
        {brand.map((brand, index) => (
          <motion.img
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: isDesktopMode && index % 2 === 0 ? -100 : 100,
                x: !isDesktopMode && 1300 && index % 2 === 0 ? -100 : 100,
              },
              show: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: 'tween',
                  delay: 0.5,
                  duration: 1,
                  ease: 'easeOut',
                },
              },
            }}
            whileInView='show'
            initial='hidden'
            viewport={{ once: false, amount: 0.25 }}
            src={`/public/assets/icons/brands/${brand}.svg`}
            alt={brand}
            className='w-20 xl:w-[150px] object-contain  m-auto '
          />
        ))}
      </div>
      <CarSlider />
    </div>
  );
};

export default Cars;
