import React from 'react';
import classes from '../../main.module.css';
import { love } from '../ReactionSection/Data';
import SingleReaction from '../ReactionSection/SingleReaction';

type Props = { 
  comment:string  
}
const SingleComment = ({ comment } : Props) => {
  return (
    <div className={`${classes.singleComment}`}>
      <div>Unknown : </div>
      <div>{comment}</div>
      <div className=" justify-end">
        <SingleReaction 
          state={love.state}
          def_state={love.def_state}
          active_state={love.active_state}
          key={love.name}
        />
      </div>
    </div>
  );
};

export default SingleComment;
