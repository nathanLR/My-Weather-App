import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'antd';
import WeatherForm from '../WeatherForm/WeatherForm';
import WeatherData from '../WeatherData/WeatherData';

import { API_KEY, API_URL } from '../../Utils/Constants';

type Props = {
  addSearchAfterSubmit: (newSearch: {}) => void;
};

const WeatherContent = ({ addSearchAfterSubmit }: Props) => {
  const [weatherData, setWeatherData] = useState<{}>();
  const fetchWeatherData = (data: string) => {
    fetch(`${API_URL}q=${data}&units=metric&appid=${API_KEY}`)
      .then((reponse) => reponse.json())
      .then((data) => {
        setWeatherData(data);
        addSearchAfterSubmit(data);
      });
  };
  console.log(weatherData);

  return (
    <div>
      <Divider orientation="left">Localistation</Divider>
      <WeatherForm fetchWeatherData={fetchWeatherData} />
      <WeatherData data={weatherData} />
    </div>
  );
};

WeatherContent.propTypes = {
  addSearchAfterSubmit: PropTypes.func,
};

export default WeatherContent;
