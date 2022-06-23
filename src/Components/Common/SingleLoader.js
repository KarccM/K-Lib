import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SingleLoader = ({ width, variant, height }) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      key={width + height}
      height={height}
      className={'my-auto'}
    />
  );
};

export default SingleLoader;
