import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

const times = ['12:00 AM', '14:00 PM', '16:00 PM', '18:00 PM', '20:00 PM'];

const SelectTime = () => {
  const [time, setTime] = useState('');

  return (
    <div className='flex flex-col items-center xl:items-start relative'>
      <Menu as='div' className='relative inline-block text-left'>
        <div className='flex items-center gap-1'>
          <HiLocationMarker className='w-5 h-5  text-accent-default' />
          <Menu.Button className='font-semibold'>Select Location</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute top-[50px] z-30 transform  xl:top-[60px] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {times.map((time) => (
              <div className='px-1 py-1 ' key={time}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setTime(time)}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {time}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      <p className='text-secondary'>10:00 AM &rarr; {time}</p>
    </div>
  );
};

export default SelectTime;
