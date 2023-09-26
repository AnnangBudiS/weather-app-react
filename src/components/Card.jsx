import React from 'react';

const Card = ({ title, stat, description }) => {
  return (
    <div>
      <div className="text-slate-200 flex flex-col items-center p-10 px-20 bg-slate-900 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-indigo-600">{title}</p>
        <div className="flex items-center gap-5">
          <h2 className="text-5xl text-cyan-600 font-bold py-5">{stat}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
