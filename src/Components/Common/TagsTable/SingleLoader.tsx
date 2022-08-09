import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import {SkeletonType} from "./index"

const SingleLoader = ({ width, variant, height }:SkeletonType) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      className={'my-auto'}
    />
  );
};

export default SingleLoader;
