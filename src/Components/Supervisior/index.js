import React from 'react';
import Supervisor from './Supervisor';
import classes from '../../main.module.css';

const index = ({ name, opi, section }) => {
  return (
    <div className={`${classes.members} basis-1/3`}>
      <Supervisor name={name} opi={opi} section={section} />
    </div>
  );
};

export default index;
