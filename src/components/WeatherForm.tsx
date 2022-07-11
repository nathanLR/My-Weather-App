import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

//import { Coords } from '../Utils/Types';

const WeatherForm = ({ fetchWeatherData }) => {
  // ========= V1 =======
  const [city, setCity] = useState<string>('');
  const handleSubmit = () => {
    fetchWeatherData(city);
  };

  // ========= END V1 ========

  // ========= V2 =========
  // const initialValue: { cityName: string; coords: Coords } = {
  //   cityName: '',
  //   coords: { lat: '', long: '' },
  // };
  // const [localisation, setLocalisation] = useState(initialValue);

  // const handleSubmit = () => {
  //   console.log('form submited');
  //   if (localisation.cityName.length > 0) {
  //     fetchWeatherData(localisation.cityName);
  //   } else {
  //     fetchWeatherData(localisation.coords);
  //   }
  // };

  // const handleCityChange = ({ target }) => {
  //   setLocalisation((prev) => {
  //     return { ...prev, cityName: target.value };
  //   });
  // };
  // const handleCoordsChange = ({ target }) => {
  //   const { name, value } = target;
  //   setLocalisation((prev) => {
  //     return {
  //       ...prev,
  //       coords: {
  //         ...prev.coords,
  //         [name]: value,
  //       },
  //     };
  //   });
  // };

  // ========== END V2 ===========

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

      {/* <Form.Item label="Lat">
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
      </Form.Item> */}

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
