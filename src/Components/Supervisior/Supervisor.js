import React from 'react';
import AvatarGenerators from '../Common/AvatarGenerators';

const Supervisor = ({ name, section, opi }) => {
  return (
    <>
      <AvatarGenerators info={{ sex: 'man' }} />
      <h1 className="text-4xl text-gray-900">
        {name} : {section}
      </h1>
      <div className="p-4 text-xl">{opi}</div>
    </>
  );
};

export default Supervisor;
