import React from 'react';
import DefaultHeader from './DefaultHeader';

const DefaultList = ({ title, children }) => {
  return (
    <>
      <DefaultHeader title={title} />
      <div className="flex flex-wrap justify-center">{children}</div>
    </>
  );
};

export default DefaultList;
