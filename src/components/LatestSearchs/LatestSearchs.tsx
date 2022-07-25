import React from 'react';
import { List } from 'antd';

const data = [
  'List item 1',
  'List item 2',
  'List item 3',
  'List item 4',
  'List item 5',
];
const LatestSearch = () => {
  return (
    <List
      size="large"
      header={<div>Dernières recherches</div>}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      dataSource={data}
    />
  );
};

export default LatestSearch;
