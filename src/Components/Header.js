import React from 'react';

const Header = ({ title, year }) => {
  return (
    <div className="text-center w-2/3 flex items-end">
      <h1 className="text-6xl">{title}</h1>
      <span className="ml-2 text-2xl text-gray-500">{year}</span>
    </div>
  );
};

export default Header;
