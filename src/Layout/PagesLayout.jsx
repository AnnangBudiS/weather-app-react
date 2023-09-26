import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { FaWind, FaThermometerHalf, FaCloudscale } from 'react-icons/fa';
import Serach from '../components/search/Serach';

const PagesLayout = ({
  icon,
  temp,
  desc,
  loc,
  speed,
  humi,
  visibility,
  pressure,
  handleOnChange,
  handleOnClick,
  value,
}) => {
  return (
    <div className="flex justify-center w-full gap-20 p-10">
      <Sidebar img={icon} temp={temp} description={desc} location={loc} />
      <div className="">
        <div>
          <Serach
            handleOnChange={handleOnChange}
            title={value}
            handleOnClick={handleOnClick}
          />
        </div>
        <p className="text-2xl font-semibold text-slate-300 mb-6">
          Today's Hightlights
        </p>
        <div className="grid grid-cols-2 gap-10">
          <Card title="Wind Speed" description={<FaWind />} stat={speed} />
          <Card
            title="Humidity"
            description={<FaThermometerHalf />}
            stat={humi}
          />
          <Card
            title="Visibility"
            description={<FaCloudscale />}
            stat={visibility}
          />
          <Card title="Air Pressure" stat={pressure} />
        </div>
      </div>
    </div>
  );
};

export default PagesLayout;
