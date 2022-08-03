import React, { useState } from 'react';
import { List } from 'antd';

const LatestSearch = () => {
  const [searches, setSearches] = useState<string[]>([]);

  return (
    <List
      size="large"
      header={<div>Latest locations</div>}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      dataSource={searches}
    />
  );
};

export default LatestSearch;
