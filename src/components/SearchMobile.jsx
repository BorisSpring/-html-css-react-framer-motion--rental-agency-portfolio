import React from 'react';
import SelectLocation from './SelectLocation';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';
const SearchMobile = () => {
  return (
    <div className='flex flex-col gap-2 divide-y'>
      <SelectLocation />
      <SelectDate />
      <SelectTime />
    </div>
  );
};

export default SearchMobile;
