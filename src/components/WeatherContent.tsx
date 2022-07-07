import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import WeatherForm from './WeatherForm';
import WeatherData from './WeatherData';

import { API_KEY, API_URL } from '../Utils';

const WeatherContent = () => {
  const [weatherData, setWeatherData] = useState<{}>();
  useEffect(() => {
    fetch(`${API_URL}lat=50&long=1&appid=${API_KEY}`)
      .then((reponse) => reponse.json())
      .then((data) => setWeatherData(data));
  }, []);

  return (
    <div>
      <Divider orientation="left">Localistation</Divider>
      <WeatherForm />
      <WeatherData />
    </div>
  );
};

export default WeatherContent;
