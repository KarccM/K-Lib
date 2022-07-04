import { Avatar } from '@mui/material';
import React from 'react';
import setRandomStyle from '../../../CustomHooks/setRandomStyle';

const DeafaultItem = ({ item }) => {
  const style = setRandomStyle();
  return (
    <>
      {typeof item !== String ? (
        <Avatar src={item.displayIcon} alt={item.displayName} />
      ) : (
        <button
          className={`rounded-md mx-1 px-2 py-2 inline-block my-2 ` + style}
        >
          {item}
        </button>
      )}
    </>
  );
};

export default DeafaultItem;
