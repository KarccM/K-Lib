import React from 'react';
import setRandomStyle from '../../CustomHooks/setRandomStyle';

const TagItem = ({ tag }) => {
  console.log('Tag rendered');
  const style = setRandomStyle();
  return (
    <button
      className={`rounded-md mx-1 px-2 py-2 inline-block my-2 ` + style}
      key={tag}
    >
      {tag}
    </button>
  );
};

export default TagItem;
