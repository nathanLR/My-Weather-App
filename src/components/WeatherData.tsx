import React from 'react';
import PropTypes from 'prop-types';
import {Divider, Row, Col} from 'antd';


const WeatherData = ({data}) => {
  return <div>
    <Divider orientation="left">Weather</Divider>
    <Row>
      <Col span={12}>image</Col>
      <Col span={12}>data</Col>
    </Row>
  </div>;
};


WeatherData.propTypes = {
  data: PropTypes.object
}


export default WeatherData;
