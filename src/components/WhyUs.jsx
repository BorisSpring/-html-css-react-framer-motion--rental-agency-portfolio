import React from 'react';
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { useMediaQuery } from 'react-responsive';

const WhyUs = () => {
  const isDesktopMode = useMediaQuery({ query: `(min-width: 1300px)` });
  return (
    <section
      className='container mx-auto flex flex-col items-center justify-center h-fit '
      id='Why Us'
    >
      <motion.h2
        variants={fadeIn('left', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='text-[32px] md:text-[40px] xl:text-[48px] text-center font-semibold leading-8 xl:leading-[48px] '
      >
        Unmatched excellence and customer stisfaction
      </motion.h2>
      <motion.p
        variants={fadeIn('right', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='text-secondary text-center max-w-[600px] my-5'
      >
        Out dedication to providing exceptional services sets us apart from the
        competition. From the moment you enagge with us, we strive to exceed
        your expectations in every interaction
      </motion.p>

      <motion.img
        variants={fadeIn('down', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        src='/assets/images/why/car.svg'
        className='hidden xl:block'
        alt='Ferrari Car Red Color'
      />
      <div className='flex flex-wrap justify-evenly  w-full'>
        <motion.div
          variants={fadeIn(isDesktopMode ? 'up' : 'left', 'tween', 1, 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col items-center max-w-[150px]'
        >
          <MdKey className='h-10 w-10 text-accent-default' />
          <h3 className='font-[600] text-primary text-[25px] text-center leading-7 h-[90px]'>
            Rent simply and quickly
          </h3>
          <p className='text-center text-secondary'>
            We prioritize your need and we go above and beyond ensure your
            experience with us is nothing short of outstanding
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(isDesktopMode ? 'down' : 'right', 'tween', 1, 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col items-center max-w-[150px]'
        >
          <MdHandshake className='h-10 w-10 text-accent-default' />
          <h3 className='font-[600] text-primary text-[25px] text-center leading-7 h-[90px]'>
            Prompt and flexible services
          </h3>
          <p className='text-center text-secondary'>
            We prioritize your need and we go above and beyond ensure your
            experience with us is nothing short of outstanding
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(isDesktopMode ? 'up' : 'left', 'tween', 1, 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col items-center max-w-[150px]'
        >
          <MdTrendingUp className='h-10 w-10 text-accent-default' />
          <h3 className='font-[600] text-primary text-[25px] text-center leading-7 h-[90px]'>
            Modern well maintained vehicles
          </h3>
          <p className='text-center text-secondary'>
            We prioritize your need and we go above and beyond ensure your
            experience with us is nothing short of outstanding
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
