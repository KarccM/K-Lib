import React from 'react';

const style = {
  color: '#1363DF',
};

const Description = ({ description, children }) => {
  console.log('description rendered');
  const { resource, idea } = description;
  return (
    <div>
      <section className="text-2xl">{idea}</section>
      {children}
      <p className="font-bold">Resources:</p>
      <ul>
        {resource.map(({ name, link }) => {
          return (
            <li className="mt-2 text-sm" key={name}>
              {name} : <span style={style}>{link}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Description;
