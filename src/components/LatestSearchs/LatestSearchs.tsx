import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import './LatestSearch.css';

type Props = {
  latestSearch: {}[];
  displayAlreadySearchedLocation: (searchData: {}) => void;
};

const LatestSearch = ({
  latestSearch,
  displayAlreadySearchedLocation,
}: Props) => {
  return (
    <List
      header={<div>LATEST SEARCH</div>}
      bordered={true}
      dataSource={latestSearch}
      renderItem={(item) => (
        <List.Item
          onClick={() => displayAlreadySearchedLocation(item)}
          style={{ cursor: 'pointer' }}
        >
          {item.name}
        </List.Item>
      )}
    />
  );
};

LatestSearch.propTypes = {
  latestSearch: PropTypes.array,
  displayAlreadySearchedLocation: PropTypes.func,
};

export default LatestSearch;
