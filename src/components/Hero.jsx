import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import Search from './Search';
import { useSearchContext } from '../context/useSearchContext';
const Hero = () => {
  const { search } = useSearchContext();
  return (
    <section
      className='h-screen   flex flex-col lg:flex-row px-2 lg:px-4 lg:items-center lg:justify-between  mx-auto  container relative '
      id='Home'
    >
      <div className=' flex flex-col items-center gap-3 lg:items-start lg:gap-10  '>
        <motion.h1
          variants={fadeIn('up', 'tween', 1, 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='text-[32px] font-semibold md:text-[52px] lg:text-[62px] leading-8 md:leading-[52px] lg:leading-[67px] text-center lg:text-left mt-20 xl:mt-0'
        >
          Explore the Fines <br />{' '}
          <span className='text-accent-default'>Global</span>
        </motion.h1>
        <motion.p
          variants={fadeIn('left', 'tween', 1, 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='text-secondary max-w-[600px] text-center  xl:text-left md:text-lg xl:text-2xl'
        >
          Find your ideal ride for any adventure with our diverse range of
          affordable and dependable car rentals.
        </motion.p>
        <motion.div
          variants={fadeIn('down', 'tween', 1, 0.5)}
          className='flex gap-3'
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <button className='btn-cta'>
            <img
              src='/public/assets/icons/playstore-btn.svg'
              alt='Play Store'
              width={132}
              height={36}
              className='object-contain'
            />
          </button>
          <button className='btn-cta'>
            <img
              src='/public/assets/icons/appstore-btn.svg'
              alt='Play Store'
              height={36}
              width={132}
              className='object-contain'
            />
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('right', 'tween', 1, 0.5)}
        className='mt-5 md:mt-8 lg:mt-0'
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <img
          src='/public/assets/images/hero/car.svg'
          alt='Car VW'
          className='max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mx-auto xl:max-w-[700px]'
        />
      </motion.div>
      <div
        className={`${
          search
            ? 'fixed top-[70px] max-w-[1300px] z-[9] w-full  shadow-lg bg-white   '
            : ' absolute bottom-[80px] shadow-lg  rounded-[20px] w-full'
        } hidden  xl:block   `}
      >
        <Search />
      </div>
    </section>
  );
};

export default Hero;
