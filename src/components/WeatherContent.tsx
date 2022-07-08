import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import WeatherForm from './WeatherForm';
import WeatherData from './WeatherData';

import { API_KEY, API_URL } from '../Utils/Constants';
import { Coords } from '../Utils/Types';

const WeatherContent = () => {
  const [weatherData, setWeatherData] = useState<{}>();
  const fetchWeatherData = (data: string | Coords) => {
    console.log('fetching data' + data);
    fetch(`${API_URL}lat=${data.lat}&lon=${data.long}&appid=${API_KEY}`)
      .then((reponse) => reponse.json())
      .then((data) => setWeatherData(data));
  };
  console.log(weatherData);
  return (
    <div>
      <Divider orientation="left">Localistation</Divider>
      <WeatherForm fetchWeatherData={fetchWeatherData} />
      {!weatherData ? <div>no data yet</div> : <WeatherData />}
    </div>
  );
};

export default WeatherContent;
