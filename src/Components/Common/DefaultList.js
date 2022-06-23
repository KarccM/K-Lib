import React from 'react';
import DefaultHeader from './DefaultHeader';

const DefaultList = ({ title, children }) => {
  return (
    <>
      <DefaultHeader title={title} />
      <div>{children}</div>
    </>
  );
};

export default DefaultList;
