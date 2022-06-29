import React from 'react';

const Description = ({ description, children }) => {
  console.log('description rendered');
  const { idea } = description;
  return (
    <div>
      <section className="text-2xl mb-6">{idea}</section>
      {children}
    </div>
  );
};

export default Description;
