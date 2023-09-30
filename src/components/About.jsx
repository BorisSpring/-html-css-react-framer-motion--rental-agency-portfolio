import React from 'react';
import CountUp from 'react-countup/build/index.js';

import { BiCar, BiHomeAlt } from 'react-icons/bi';
import { FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isDesktopMode = useMediaQuery({ query: '(min-width:1300px)' });
  return (
    <section
      id='About'
      className='container mx-auto h-screen flex flex-col xl:flex-row items-center xl:justify-evenly '
    >
      <motion.div
        className='mt-10 xl:mt-0 '
        variants={fadeIn(isDesktopMode ? 'left' : 'up', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <img
          src='/public/assets/images/about/car01.png'
          alt='Honda Car CRV 109KS'
          className='max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain'
        />
      </motion.div>
      <motion.div
        className='flex flex-col max-w-[300px] md:max-w-[400px] mt-10 xl:mt-0 xl: xl:max-w-[500px] '
        variants={fadeIn(isDesktopMode ? 'right' : 'down', 'tween', 1, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <h2 className='font-semibold text-[30px] md:text-[40px] md:leading-[30px] xl:leading-[40px] xl:text-[40px] text-center leading-8 mb-2 xl:text-left'>
          Car services simplified
        </h2>
        <p className='text-secondary text-[18px] sm:text-[20px] text-center xl:text-left mt-3'>
          Rent, choose, and repair with ease. Our convenient locations, diverse
          car types, and reliable repair points ensure a seamless car experience
        </p>
        <div className='flex justify-evenly mt-3 lg:mt-5'>
          <div className='flex flex-col'>
            <BiCar className='w-10 h-10 text-accent-default' />
            <p className='font-bold md:text-2xl'>
              {' '}
              <CountUp start={0} end={50} duration={3} delay={1} />+
            </p>
            <p className='text-secondary text-sm sm:text-base'>
              Car <br /> Types
            </p>
          </div>
          <div className='flex flex-col '>
            <BiHomeAlt className='w-10 h-10 text-accent-default' />
            <p className='font-bold md:text-2xl'>
              <CountUp start={0} end={135} duration={3} delay={1} />+
            </p>
            <p className='text-secondary text-sm sm:text-base'>
              Car <br /> Types
            </p>
          </div>
          <div className='flex flex-col'>
            <FaServicestack className='w-10 h-10 text-accent-default' />
            <p className='font-bold md:text-2xl'>
              {' '}
              <CountUp start={0} end={35} duration={3} delay={1} />+
            </p>
            <p className='text-secondary text-sm sm:text-base'>
              Car <br /> Types
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
