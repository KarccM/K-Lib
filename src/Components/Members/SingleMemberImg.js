import React from 'react';
import classes from '../../main.module.css';
import AvatarGenerators from '../Common/AvatarGenerators';
const SingleMemberImg = () => {
  return (
    <AvatarGenerators
      styles={`${classes.icon} hover:ring-4 hover:ring-yellow-400`}
    />
  );
};

export default SingleMemberImg;
