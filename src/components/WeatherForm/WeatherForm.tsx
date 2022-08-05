import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

//import { Coords } from '../Utils/Types';
type Props = {
  fetchWeatherData: (data: string) => void;
};
const WeatherForm = ({ fetchWeatherData }: Props) => {
  // ========= V1 =======
  const [city, setCity] = useState<string>('');
  const handleSubmit = () => {
    if (city) {
      fetchWeatherData(city);
    } else {
      alert('You need to write a location first.');
    }
  };

  return (
    <Form layout="inline" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
      <Form.Item label="City Name">
        <Input
          placeholder="ex: London, UK"
          value={city}
          onChange={({ target }) => {
            setCity(target.value);
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

WeatherForm.propTypes = {
  fetchWeatherData: PropTypes.func,
};

export default WeatherForm;
