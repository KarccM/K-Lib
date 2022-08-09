import React from 'react';
import DefaultHeader from './DefaultHeader';
type Props = {
  title:string,
  children:React.ReactNode
}
const DefaultList = ({ title, children }:Props) => {
  return (
    <>
      <DefaultHeader title={title} />
      <div className="flex flex-wrap justify-center">{children}</div>
    </>
  );
};

export default DefaultList;
