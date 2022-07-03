import React from 'react';
import { Stack } from '@mui/material';
import SingleImgLoader from './SingleImgLoader';
const mems = [1, 2, 3, 4];
const Loading = () => {
  return (
    <>
      <Stack>
        <div className="flex flex-row -space-x-1.5">
          {mems.map((mem) => {
            return <SingleImgLoader key={mem} />;
          })}
        </div>
      </Stack>
    </>
  );
};

export default Loading;
