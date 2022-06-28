import React from 'react';
import TagsTable from '../Common/TagsTable/index';
const index = ({ loading, tags }) => {
  return <TagsTable loading={loading} data={tags} title="Tags" />;
};
export default index;
