import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Footer = () => {
  const isDesktopMode = useMediaQuery({ query: '(min-width:1300px)' });

  return (
    <footer className='bg-slate-200 pt-5'>
      <div className='flex flex-col lg:flex-row px-5 pb-5 lg:px-10 lg:pb-10 gap-[25px] lg:gap-[50px] container mx-auto '>
        <motion.div
          variants={fadeIn(!isDesktopMode ? 'left' : 'up', 'tween', 1, 0.5)}
          whileInView='show'
          initial='hidden'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col gap-2'
        >
          <img
            src='/assets/icons/logo.svg'
            alt='Company Logo'
            className='w-[158px] '
          />
          <p>Lorem ipsum dolor, sit amet consectetuntore dolor molestias</p>
          <div className='flex items-center gap-1'>
            <FaPhone className='w-5 h-5 text-accent-default' />
            <span className='font-[600]'>+381-62-9256-229</span>
          </div>
          <div className='flex items-center gap-1'>
            <MdEmail className='w-5 h-5 text-accent-default' />
            <span className='font-[600]'>borisdimitrijevicit@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(!isDesktopMode ? 'right' : 'down', 'tween', 1, 0.5)}
          whileInView='show'
          initial='hidden'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col gap-2  whitespace-nowrap'
        >
          <h2 className='font-[600]'>Company</h2>
          <p>New York</p>
          <p>Carrers</p>
          <p>Mobile</p>
          <p>Blog</p>
        </motion.div>

        <motion.div
          variants={fadeIn(!isDesktopMode ? 'left' : 'up', 'tween', 1, 0.5)}
          whileInView='show'
          initial='hidden'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col gap-2  whitespace-nowrap'
        >
          <h2 className='font-[600]'>Working Hours</h2>
          <p>
            Mon-Fri:{' '}
            <span className='text-primary font-semibold'>09:00AM-22:00PM </span>
          </p>
          <p>
            Sat:{' '}
            <span className='text-primary font-semibold'>10:00AM-20:00pm </span>
          </p>
          <p>
            Sun: <span className='text-primary font-semibold'>Closed </span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(!isDesktopMode ? 'right' : 'down', 'tween', 1, 0.5)}
          whileInView='show'
          initial='hidden'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col gap-2 max-w-[280px]'
        >
          <h2 className='font-[600] '>Newsletter</h2>
          <p className='text-primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Your Email
            Su
          </p>
          <form action='' className='flex gap-2'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Your email...'
              className='placeholder:text-secondary rounded-md outline-none focus:ring focus:ring-opacity-70 focus:ring-red-400 px-2 py-1 border-2 border-red-400'
            />
            <button
              type='submit'
              className='bg-accent-default hover:bg-accent-hover text-white px-2 py-1 rounded-md'
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
