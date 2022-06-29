import React, { useState } from 'react';
import classes from '../main.module.css';
import TextField from '@mui/material/TextField';

const Rating = ({ rate }) => {
  const [editMode, setEditMode] = useState(false);
  const [rating, setRating] = useState(rate);
  return (
    <div
      className={`${classes.members} basis-1/3`}
      onMouseLeave={() => {
        setEditMode(false);
      }}
    >
      {editMode ? (
        <>
          <TextField
            id="standard-basic"
            label="Standard"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            sx={{
              fontSize: 34,
            }}
            variant="standard"
          />
        </>
      ) : (
        <button
          onClick={(e) => {
            if (e.detail === 2) {
              setEditMode(true);
            }
          }}
          className={`${classes.Rating}`}
        >
          Rating {rating}/10
        </button>
      )}
    </div>
  );
};

export default Rating;
