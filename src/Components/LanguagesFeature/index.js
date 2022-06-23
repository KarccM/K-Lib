import React from 'react';
import TagsTable from '../Common/TagsTable';

const index = ({ loading, langs }) => {
  return <TagsTable loading={loading} data={langs} title={'Languages'} />;
};

export default index;
