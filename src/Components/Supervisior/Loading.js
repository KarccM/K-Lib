import React from 'react';
import { skeletons } from './data';
import Skeleton from '@mui/material/Skeleton';
const Loading = () => {
  return (
    <>
      {skeletons.map(({ style, variant, width, height, className }) => {
        return (
          <Skeleton
            style={style}
            variant={variant}
            width={width}
            height={height}
            className={className}
            key={width + height}
          />
        );
      })}
    </>
  );
};

export default Loading;
