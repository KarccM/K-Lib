import React from 'react';

const Header = ({ name, role }) => {
  return (
    <div className="w-2/3">
      <h1 className="text-6xl mb-4">{name}:</h1>
      <span className="text-2xl text-gray-500">ROLE : {role}</span>
    </div>
  );
};

export default Header;
