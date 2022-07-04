import React from 'react';
import DefaultHeader from './DefaultHeader';

const DefaultList = ({ title, children }) => {
  return (
    <>
      <DefaultHeader title={title} />
      <div className="flex">{children}</div>
    </>
  );
};

export default DefaultList;
