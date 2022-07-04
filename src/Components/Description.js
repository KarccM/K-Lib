import React from 'react';

const Description = ({ description, children }) => {
  return (
    <div>
      <section className="text-2xl mb-6">{description}</section>
      {children}
    </div>
  );
};

export default Description;
