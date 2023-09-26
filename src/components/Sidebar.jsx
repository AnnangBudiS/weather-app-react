import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
const Sidebar = ({ temp, description, location, img }) => {
  const event = new Date();
  const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const currentEvent = event.toLocaleDateString(undefined, option);
  return (
    <div className="max-h-screen bg-slate-950 bg-[url('/images/cloud.png')] bg-no-repeat bg-center">
      <div className="glass relative max-h-screen">
        <div className="flex flex-col items-center p-20 ">
          <img src={`images/${img}.png`} alt="img-icons" />
          <div className="mt-20">
            <h4 className="text-slate-400 text-6xl font-bold">{temp}&deg;C</h4>
            <h4 className="text-slate-400 text-center mt-10 text-2xl">
              {description}
            </h4>
          </div>
          <div>
            <div className="text-center text-slate-400 py-10 space-x-3">
              <p>{currentEvent}</p>
            </div>
            <p className="flex space-x-2 text-slate-400 items-center justify-center">
              <FaLocationDot />
              <span>{location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
