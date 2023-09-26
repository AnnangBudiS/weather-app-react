import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PagesLayout from '../Layout/PagesLayout';

const HomePages = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const API_TOKEN = import.meta.env.VITE_REACT_APP_TOKEN;
  const [search, setSearch] = useState('');
  const [newLocation, setNewLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSearcLocations = async () => {
    try {
      const ress = await axios.get(
        `${BASE_URL}/weather?q=${
          !search ? 'bantul' : search
        }&appid=${API_TOKEN}&units=metric`,
      );
      const getLoacations = await ress.data;
      setNewLocation(getLoacations);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (e) => {
    if (e && e.target) {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getSearcLocations();
  }, [search]);

  return (
    <div>
      {!isLoading ? (
        <PagesLayout
          value={search}
          handleOnChange={handleOnChange}
          handleOnClick={getSearcLocations}
          icon={newLocation?.weather[0].icon}
          temp={parseInt(newLocation?.main.temp)}
          desc={newLocation?.weather[0].description}
          loc={newLocation?.name}
          speed={newLocation?.wind.speed}
          humi={newLocation?.main.humidity}
          visibility={newLocation?.visibility}
          pressure={newLocation.main.pressure}
        />
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  );
};
export default HomePages;
