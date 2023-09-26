import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';

const Serach = ({ handleOnChange, handleOnClick, title }) => {
  return (
    <div className="flex item-center justify-between h-10 rounded-full mb-10 bg-slate-50 ">
      <input
        onChange={handleOnChange}
        value={title}
        type="text"
        placeholder="search your city"
        className="ml-10 border-none outline-none w-full bg-inherit"
      />
      <button
        onClick={handleOnClick}
        className="text-slate-900 p-2 mr-10 bg-slate-50 "
      >
        <BiCurrentLocation />
      </button>
    </div>
  );
};

export default Serach;
