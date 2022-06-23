import React from 'react';
import setRandomStyle from '../../CustomHooks/setRandomStyle';

const DeafaultItem = ({ item }) => {
  console.log('lang rendered');
  const style = setRandomStyle();
  return (
    <button
      className={`rounded-md mx-1 px-2 py-2 inline-block my-2 ` + style}
      key={item}
    >
      {item}
    </button>
  );
};

export default DeafaultItem;
