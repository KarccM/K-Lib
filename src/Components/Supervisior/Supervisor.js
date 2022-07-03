import React from 'react';

const Supervisor = ({ displayName, displayIconSmall, description }) => {
  return (
    <>
      <img src={displayIconSmall} alt={displayName} />
      <h1 className="text-4xl text-gray-900">{displayName}</h1>
      <div className="p-4 text-xl">{description}</div>
    </>
  );
};

export default Supervisor;
