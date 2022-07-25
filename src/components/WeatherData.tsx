import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Row, Col, Image, Card } from 'antd';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const WeatherData = ({ data }: any) => {
  const { name, coord, weather, main, dt, sys, wind } = data;
  return (
    <div>
      <Divider orientation="left">Weather</Divider>
      <Row>
        <Col span={12}>
          <Image
            src="https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            preview={false}
          />
        </Col>
        <Col span={12}>
          <Card
            title={`${name}, ${sys.country} - ${dt}`}
            style={{ height: '100%' }}
          ></Card>

          
        </Col>
      </Row>
    </div>
  );
};

WeatherData.propTypes = {
  data: PropTypes.object,
};

export default WeatherData;
