import React, { useState } from 'react';
import classes from '../main.module.css';

const defButton = `${classes.react_btn} transition hover:scale-110 durration-300 `;
const ReactElements = () => {
  console.log('react element rendered');
  const [love, setLove] = useState(false);
  const [fav, setFav] = useState(false);
  return (
    <div className="my-2">
      <button
        onClick={() => {
          setLove(!love);
        }}
        className={`${defButton} ${
          love ? 'bg-red-600 text-white ' : 'bg-gray-100 hover:bg-red-400'
        }`}
      >
        Love!
      </button>
      <button
        onClick={() => {
          setFav(!fav);
        }}
        className={`${defButton} ${
          fav ? ' bg-yellow-400 text-white ' : 'bg-gray-100 hover:bg-yellow-200'
        }`}
      >
        Favourite!
      </button>
      <span className="text-black">
        {(love || fav) && 'You ,'}3364 other React This
      </span>
    </div>
  );
};

export default ReactElements;
