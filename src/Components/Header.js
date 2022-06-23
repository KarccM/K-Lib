import React from 'react';

const Header = ({ title, year }) => {
  console.log('header rendered');
  return (
    <div className="text-center">
      <h1 className="text-6xl">{title}</h1>
      <span className="text-xl text-gray-400">{year}</span>
    </div>
  );
};

export default Header;
