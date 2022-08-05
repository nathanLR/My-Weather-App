import React, { useState } from 'react';

import LatestSearch from './components/LatestSearchs/LatestSearchs';
import WeatherContent from './components/WeatherContent/WeatherContent';

import { Layout } from 'antd';
import { Typography } from 'antd';

import { blue } from '@ant-design/colors';
import { flex } from './styles/LayoutStyles';

const { Title } = Typography;
const { Header, Content, Sider, Footer } = Layout;

export default function App() {
  const [latestSearch, setLatestSearch] = useState<{}[]>([]);
  const [alreadySearchedLocation, setAlreadySearchedLocation] = useState<{}>({});
  const addSearchAfterSubmit = (data: {}) => {
    if (data) {
      setLatestSearch((prevState) => [data, ...prevState]);
    }
  };
  const displayAlreadySearchedLocation = (cityData: {}) => {
      setAlreadySearchedLocation(cityData);
  }
  //use memo 
  return (
    <Layout>
      <Header style={{ ...flex, padding: '0px 24px' }}>
        <Title style={{ color: 'white', margin: '0' }}>MyWeatherApp</Title>
      </Header>
      <Layout style={{ minHeight: 'calc(100vh - 128px)' }}>
        <Sider theme="light">
          <LatestSearch latestSearch={latestSearch} displayAlreadySearchedLocation={displayAlreadySearchedLocation}/>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content style={{ padding: '24px', backgroundColor: '#fff' }}>
            <WeatherContent addSearchAfterSubmit={addSearchAfterSubmit} cachedData={alreadySearchedLocation}/>
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
          padding: '20px 0',
          height: '64px',
          backgroundColor: '#001529',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p>Nathan LE ROUX - 2022</p>
      </Footer>
    </Layout>
  );
}
