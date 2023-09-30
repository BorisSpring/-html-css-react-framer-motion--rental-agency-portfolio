import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css';

import 'react-date-range/dist/theme/default.css';

const SelectLocation = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <div className='flex flex-col items-center xl:items-start relative'>
      <Menu as='div' className='relative inline-block text-left'>
        <div className='flex items-center gap-1'>
          <FaCalendarAlt className='w-5 h-5   text-accent-default' />
          <Menu.Button className='font-semibold'>Select Date</Menu.Button>
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
          <Menu.Items className='absolute -top-[300px] -left-[100px] z-30 transform max-w-[332px]  xl:top-[60px] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {date.map((location) => (
              <div className='px-1 py-1 ' key={location}>
                <Menu.Item>
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    rangeColors={['#ed1d24']}
                    minDate={addDays(new Date(), 0)}
                  />
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      <p className='text-secondary whitespace-nowrap flex items-center gap-1'>
        {date[0].endDate ? (
          <>
            {format(new Date(date[0]?.startDate), 'MMM , dd yyyy')}
            <FaArrowRight className='w-3 h-3 text-accent-default' />
            {format(new Date(date[0]?.endDate), 'MMM , dd yyyy')}
          </>
        ) : (
          <p className='text-secondary'>Please Select Date</p>
        )}
      </p>
    </div>
  );
};

export default SelectLocation;
