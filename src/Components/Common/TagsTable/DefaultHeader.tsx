import React from 'react';
import classes from '../../../main.module.css';

type Props = {
  title:string
}

const DefaultHeader = ({ title }:Props) => {
  return <h1 className={`${classes.headItem}`}>{title}</h1>;
};

export default DefaultHeader;
