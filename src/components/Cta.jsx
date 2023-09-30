import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Cta = () => {
  const isDesktopMode = useMediaQuery({ query: '(min-width: 1300px)' });

  return (
    <div className='container mx-auto flex flex-col lg:flex-row h-screen px-2 items-center lg:justify-between'>
      <motion.div
        className='max-w-[400px]'
        variants={fadeIn(isDesktopMode ? 'left' : 'up', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <h2 className='text-center text-primary font-[700] text-[28px] md:text-[34px] lg:text-[40px] leading-7 md:leading-9 mb-5'>
          Download our App now and hit the road with ease
        </h2>
        <p className='text-secondary text-center text-[16px] md:text-[20px'>
          orem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          praesentium deserunt pariatur laudantium expedita quae! Doloribus ea
          reiciendis unde repellendus porro sint amet voluptas repellat modi,
          aperiam, necessitatibus obcaecati asperiores. Call to action button
          Call to action button
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn(isDesktopMode ? 'right' : 'down', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <img
          src='/assets/images/cta/phone.svg'
          alt='Company Phone App'
          className='max-h-[300px] md:max-h-[400px] xl:max-h-[500px] mt-10 lg:mt-0 m-auto'
        />
      </motion.div>
    </div>
  );
};

export default Cta;
