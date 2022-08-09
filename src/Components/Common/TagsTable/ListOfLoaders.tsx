import * as React from 'react';
import Stack from '@mui/material/Stack';
import DefaultHeader from './DefaultHeader';

type Props = {
  title:string,
  spacing:number
  children: React.ReactNode
}
const ListOfLoaders = ({ spacing, title, children }:Props) => {
  return (
    <Stack spacing={spacing}>
      <DefaultHeader title={title} />
      {children}
    </Stack>
  );
};

export default ListOfLoaders;
