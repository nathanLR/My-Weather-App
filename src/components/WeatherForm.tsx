import React, { useState } from 'react';

import { Form, Button, Input } from 'antd';

type Coords = {
  lat: string;
  long: string;
};

const WeatherForm = () => {
  const initialValue: { cityName: string; coords: Coords } = {
    cityName: '',
    coords: { lat: '', long: '' },
  };
  const [localisation, setLocalisation] = useState(initialValue);

  const onFinish = (value: any) => {
    console.log(value);
  };

  const handleCityChange = ({ target }) => {
    setLocalisation((prev) => {
      return { ...prev, cityName: target.value };
    });
  };
  const handleCoordsChange = ({ target }) => {
    const { name, value } = target;
    setLocalisation((prev) => {
      return {
        ...prev,
        coords: {
          ...prev.coords,
          [name]: value,
        },
      };
    });
  };
  console.log(localisation);
  return (
    <Form
      onFinish={onFinish}
      layout="inline"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
    >
      <Form.Item label="City Name">
        <Input
          placeholder="ex: London, UK"
          value={localisation.cityName}
          onChange={handleCityChange}
        />
      </Form.Item>

      <Form.Item label="Lat">
        <Input
          placeholder="ex: 50.50"
          name="lat"
          value={localisation.coords.lat}
          onChange={handleCoordsChange}
        />
      </Form.Item>
      <Form.Item label="Long">
        <Input
          placeholder="ex: -0.12"
          name="long"
          value={localisation.coords.long}
          onChange={handleCoordsChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary">Search</Button>
      </Form.Item>
    </Form>
  );
};

export default WeatherForm;
