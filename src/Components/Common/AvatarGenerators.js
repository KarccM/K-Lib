import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

const AvatarGenerators = ({ styles }) => {
  const config = genConfig();
  return <Avatar className={`w-32 h-32 ${styles}`} {...config} />;
};

export default AvatarGenerators;
