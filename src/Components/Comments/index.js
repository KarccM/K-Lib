import React, { useState } from 'react';
import SingleComment from './SingleComment';
import classes from '../../main.module.css';

function* generator() {
  yield 'OP Champs plz nerf him';
  yield 'nice champs but i hate him';
  yield 'ill put him i A tier';
  yield 'ggs , trash game';
}

const gen = generator();
const Index = () => {
  const loadMoreComment = () => {
    let value = gen.next().value;
    let value2 = gen.next().value;
    setLabel('Load More!');
    if (value && value2) setComments([...comments, value, value2]);
    else setSeeMore(false);
  };
  const [comments, setComments] = useState([]);
  const [label, setLabel] = useState('Show Comments!');
  const [seeMore, setSeeMore] = useState(true);

  return (
    comments && (
      <div>
        {comments.map((comment, idx) => {
          return <SingleComment comment={comment} key={idx} />;
        })}
        {seeMore && (
          <button
            className={`${classes.comment_btn}`}
            onClick={loadMoreComment}
          >
            {label}
          </button>
        )}
      </div>
    )
  );
};

export default Index;
