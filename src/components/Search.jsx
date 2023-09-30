import React from 'react';
import SelectLocation from './SelectLocation';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';

const Search = () => {
  return (
    <div className='flex items-center justify-between px-2 py-4  mx-auto  z-[9999999999999999] '>
      <SelectLocation />
      <SelectTime />
      <SelectDate />
      <div>
        <button className='px-4 py-2 bg-accent-default hover:bg-accent-hover transition-all duration-300 text-white rounded-md'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
