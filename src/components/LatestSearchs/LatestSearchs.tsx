import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const LatestSearch = ({ latestSearch }) => {
  return (
    <List
      header={<div>LATEST SEARCH</div>}
      bordered={true}
      dataSource={latestSearch}
      renderItem={(item) => <List.Item>{item.name}</List.Item>}
    />
  );
};

LatestSearch.propTypes = {
  latestSearch: PropTypes.array,
};

export default LatestSearch;
