import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Row, Col, Image, Card, List } from 'antd';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CloudOutlined } from '@ant-design/icons';
import { grey } from '@ant-design/colors';

// `${name}, ${sys.country} - ${dt}`
const WeatherData = ({ data }: any) => {
  console.log(grey);
  if (!data) {
    // PLACEHOLDER DATA, WAITING FOR USER TO SEARCH A LOCATION'S WEATHER
    return (
      <div>
        <Divider orientation="left">Weather</Divider>
        <Row>
          <Col span={24}>
            <Card
              title={
                'London, GB - Time : 18:20:25 - Coords. Aprox. : 51.5, -0.12'
              }
              style={{ height: '100%', color: '#e1e1e1' }}
              headStyle={{ fontStyle: 'italic', color: '#e1e1e1' }}
            >
              <ul className="dataList">
                <li></li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  } else {
    // ACTUAL DATAS DISPLAYED AFTER USER SEARCHED FOR IT
    const { name, coord, weather, main, dt, sys, wind } = data;
    return (
      <div>
        <Divider orientation="left">Weather</Divider>
        <Row>
          <Col span={24}>
            <Card
              title={`${name}, ${sys.country} - Time : ${dt} - Coords. Aprox : ${coord.lat}, ${coord.lon}`}
              style={{ height: '100%' }}
            >
              <ul className="dataList">
                <li>
                  {`Temp : ${main.temp} - Min : ${main.temp_min} - Max : ${main.temp_max}`}
                </li>
                <li>{`Wind : ${wind.speed}km/h`}</li>
                <li>{`Weather : ${weather[0].description}`}</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  // return (
  //   <div>
  //     <Divider orientation="left">Weather</Divider>
  //     <Row>
  //       <Col span={24}>
  //         <Card
  //           title={!data ? 'London, UK - 18:20:25' : 'bonjour'}
  //           style={{ height: '100%' }}
  //         >
  //           <ul className="dataList">
  //             <li>
  //               <CloudOutlined />
  //               <p>data</p>
  //             </li>
  //           </ul>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </div>
  //);
};

WeatherData.propTypes = {
  data: PropTypes.object,
};

export default WeatherData;
