import React from 'react';
import classes from '../../main.module.css';
const SingleMemberImg = ({ src, alt }) => {
  return (
    <img
      className={`${classes.icon} hover:ring-4 hover:ring-yellow-400`}
      src={src}
      alt={alt}
    />
  );
};

export default SingleMemberImg;
