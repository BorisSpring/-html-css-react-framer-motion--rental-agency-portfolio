import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { useSearchContext } from '../context/useSearchContext';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { motion } from 'framer-motion';
import SearchMobile from './SearchMobile';
const navMenu = ['Home', 'Cars', 'About', 'Why Us', 'Testemonial', 'Contact'];

const Header = () => {
  const { setSearch, nav, setNav, header, setHeader } = useSearchContext();
  const isDesktopMode = useMediaQuery({ query: `(min-width: 1024px)` });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHeader(() => true);
      } else {
        setHeader(() => false);
      }
      if (window.scrollY > 800) {
        setSearch(true);
      } else {
        setSearch(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSearch, setHeader]);

  return (
    <motion.header
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 80,
          },
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: 'spring',
            duration: 2,
            delay: 0.2,
            stiffness: 500,
            damping: 80,
          },
        },
      }}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${
        header && 'fixed w-full'
      } max-w-[1920px] mx-auto z-[20]  w-full bg-white p-2 `}
    >
      <div className='xl:container mx-auto flex  flex-col lg:flex-row lg:justify-between  '>
        <div className='flex justify-between  '>
          <Link to='Home' spy={true} activeClass='active'>
            <img
              src='/assets/icons/logo.svg'
              alt='Company Logo'
              width={164}
              height={64}
              className='lg:ml-3'
            />
          </Link>
          <div
            className='lg:hidden flex items-center'
            onClick={() => setNav((prev) => !prev)}
          >
            {nav ? (
              <BiX className='text-4xl text-primary' />
            ) : (
              <BiMenuAltRight className='text-4xl text-primary' />
            )}
          </div>
        </div>
        <nav
          className={` ${
            !isDesktopMode && ' border-b-2 border-red-200 mt-2 '
          } ${
            !nav && !isDesktopMode ? 'mobile-nav' : 'mobile-nav2'
          } flex lg:flex-row  lg:items-end  flex-col  gap-1 lg:gap-5 items-center  ${
            nav && !isDesktopMode && 'h-screen '
          }`}
        >
          {navMenu.map((menu) => (
            <Link
              smooth={isDesktopMode}
              key={menu}
              to={`${menu}`}
              activeClass='active'
              spy={true}
              className={` ${
                !isDesktopMode && !nav && 'hidden'
              } mb-2 text-[15px] lg:text-[20px] font-semibold  lg:font-normal cursor-pointer hover:border-b-2 border-red-500`}
            >
              {menu}
            </Link>
          ))}
          {!isDesktopMode && nav && <SearchMobile />}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
