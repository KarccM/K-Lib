import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import AvatarGenerators from '../Common/AvatarGenerators';

const loadingColor = 'FFF20098';
const loadingStyle = { 'background-color': `#FFF20098` };
const skeletons = [
  {
    style: { loadingStyle },
    width: 100,
    height: 100,
    variant: 'circular',
    className: '',
  },
  {
    style: { 'background-color': `#${loadingColor}` },
    width: 190,
    height: 30,
    variant: 'text',
    className: '',
  },
  {
    style: { 'background-color': `#${loadingColor}` },
    width: 250,
    height: 140,
    variant: 'rectangular',
    className: 'rounded-xl mb-4',
  },
];

const Supervisor = ({ name, section, opi }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 my-2">
      {name ? (
        <>
          <AvatarGenerators info={{ sex: 'man' }} />
          <h1 className="text-4xl text-gray-900">
            {name} : {section}
          </h1>
          <div className="p-4 text-xl">{opi}</div>
        </>
      ) : (
        <>
          {skeletons.map(({ style, variant, width, height, className }) => {
            return (
              <Skeleton
                style={style}
                variant={variant}
                width={width}
                height={height}
                className={className}
                key={width + height}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Supervisor;
