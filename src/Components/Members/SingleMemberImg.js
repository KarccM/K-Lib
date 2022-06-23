import React from 'react';
import classes from '../../main.module.css';
const SingleMemberImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${classes.icon} hover:ring-4 hover:ring-yellow-400`}
    />
  );
};

export default SingleMemberImg;
