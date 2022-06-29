import React, { useState } from 'react';
import classes from '../main.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
const defButton = `${classes.react_btn} transition hover:scale-110 durration-300 `;
const ReactElements = () => {
  console.log('react element rendered');
  const [love, setLove] = useState(false);
  const [fav, setFav] = useState(false);
  return (
    <div className="w-1/3 my-2 flex items-center justify-end">
      <button
        onClick={() => {
          setLove(!love);
        }}
        className={`${defButton}`}
      >
        {love ? (
          <FavoriteIcon sx={{ color: '#F00' }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: '#F00' }} />
        )}
      </button>
      <button
        onClick={() => {
          setFav(!fav);
        }}
        className={`${defButton} `}
      >
        {fav ? (
          <StarIcon sx={{ color: '#303841' }} />
        ) : (
          <StarOutlineIcon sx={{ color: '#303841' }} />
        )}
      </button>
    </div>
  );
};

export default ReactElements;
