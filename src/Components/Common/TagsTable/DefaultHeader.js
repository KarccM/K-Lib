import React from 'react';
import classes from '../../../main.module.css';

const DefaultHeader = ({ title }) => {
  return <h1 className={`${classes.headItem}`}>{title}</h1>;
};

export default DefaultHeader;
