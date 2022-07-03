import React, { useState } from 'react';
import Button from '@mui/material/Button';
const SingleReaction = ({ state, def_state, active_state, name }) => {
  const [btnState, setBtnState] = useState(state);
  const defButton = `transition hover:scale-110 durration-300 `;

  return (
    <Button
      key={name}
      className={defButton}
      onClick={() => {
        setBtnState(!btnState);
      }}
      sx={{
        'background-color': '#F5F5F5',
        color: '#303841',
        'border-radius': '0.375rem',
        'font-weight': '700',
        'border-width': '1px',
        'border-color': '#9d9fa2',
        'padding-left': '0.5rem',
        'padding-right': '0.5rem',
        'padding-top': '0.5rem',
        'padding-bottom': '0.5rem',
        'margin-right': '1rem',
      }}
    >
      {btnState ? def_state : active_state}
    </Button>
  );
};

export default SingleReaction;
