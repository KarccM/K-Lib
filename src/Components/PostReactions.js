import React from 'react';
import { postReaction } from './ReactionSection/Data';
import SingleReaction from './ReactionSection/SingleReaction';

const PostReactions = () => {
  return (
    <div className="w-1/3 my-2 flex items-center justify-end">
      {postReaction.map(({ name, state, def_state, active_state }) => {
        return (
          <SingleReaction
            state={state}
            def_state={def_state}
            active_state={active_state}
            key={name}
          />
        );
      })}
    </div>
  );
};

export default PostReactions;
