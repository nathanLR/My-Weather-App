import React, { useState } from 'react';

import { Form, Button, Input } from 'antd';
import {HomeOutlined} from '@ant-design/icons'


type Coords = {
  lat: number;
  long: number;
};

const WeatherForm = () => {
  const [city, setCity] = useState<string>('');
  const [coords, setCoords] = useState<Coords>();

  const onFinish = (value: any) => {
    console.log(value);
  };

    
  return (
    <Form onFinish={onFinish} layout='inline' labelCol={{span: 12}} wrapperCol={{span: 12}}>
      <Form.Item label="City Name" >
        <Input
          placeholder="ex: London, UK"
          value={city}
          onChange={({ target }) => {
            setCity(target.value);
          }}
          prefix={<HomeOutlined />}
          
        />
      </Form.Item>
      <Form.Item label="City Name">
        <Input placeholder="ex: London, UK" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" disabled={!(city || coords)}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WeatherForm;
