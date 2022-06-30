import React, { useState } from 'react';
import classes from '../../main.module.css';
const SingleReaction = ({ state, def_state, active_state }) => {
  const [btnState, setBtnState] = useState(state);
  const defButton = `${classes.react_btn} transition hover:scale-110 durration-300 `;

  return (
    <button
      className={defButton}
      onClick={() => {
        setBtnState(!btnState);
      }}
    >
      {btnState ? def_state : active_state}
    </button>
  );
};

export default SingleReaction;
