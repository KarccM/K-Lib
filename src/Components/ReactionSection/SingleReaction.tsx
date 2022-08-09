import React, { useState } from 'react';
import Button from '@mui/material/Button';
interface Reaction { 
  state: any,
  def_state: any,
  active_state: any,
  key:string
}
const SingleReaction = ({ state, def_state, active_state, key }:Reaction) => {
  const [btnState, setBtnState] = useState(state);
  const defButton = `transition hover:scale-110 durration-300 `;

  return (
    <Button
      key={key}
      className={defButton}
      onClick={() => {
        setBtnState(!btnState);
      }}
      sx={{
        bgcolor: '#F5F5F5',
        color: '#303841',
        borderRadius: '0.375rem',
        fontWeight:'700',
        borderWidth: '1px',
        borderColor: '#9d9fa2',
        p: '0.5rem',
        mr: '1rem',
      }}
    >
      {btnState ? def_state : active_state}
    </Button>
  );
};

export default SingleReaction;
