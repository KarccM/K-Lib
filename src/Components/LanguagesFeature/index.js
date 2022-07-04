import React from 'react';
import TagsTable from '../Common/TagsTable/index';

const index = ({ loading, langs }) => {
  return <TagsTable loading={loading} data={langs} title={'Abilities'} />;
};

export default index;
