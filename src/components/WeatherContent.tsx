import React from 'react';
import { Divider } from 'antd';
import WeatherForm from './WeatherForm';

const WeatherContent = () => {
  return (
    <div>
      <Divider orientation="left">Localistation</Divider>
      <WeatherForm />
    </div>
  );
};

export default WeatherContent;
