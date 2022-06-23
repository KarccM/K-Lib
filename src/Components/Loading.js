import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className="flex justify-center h-72 items-center">
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress disableShrink />
      </Stack>
    </div>
  );
};

export default Loading;
