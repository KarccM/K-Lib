import * as React from 'react';
import Stack from '@mui/material/Stack';
import DefaultHeader from './DefaultHeader';

const ListOfLoaders = ({ spacing, title, children }) => {
  return (
    <Stack spacing={spacing}>
      <DefaultHeader title={title} />
      {children}
    </Stack>
  );
};

export default ListOfLoaders;
