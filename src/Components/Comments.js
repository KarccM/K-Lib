import React, { useState } from 'react';
import classes from '../main.module.css';
function* generator() {
  yield 'This is So Hot :D';
  yield 'Best Project i have ever Seen!!!';
  yield 'Sound Value Good Luck';
  yield 'i won iphone 11 follow this link and get one for ur self www.jakeass.net/fake';
  yield 'if u want to have a girlfriend like my comment';
  yield 'im real vampire and ill rise the world';
  yield 'Some content';
}
const gen = generator();

const Comments = () => {
  console.log('Comment reender');
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
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment} />;
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

const Comment = ({ comment }) => {
  return (
    <div className={`${classes.singleComment}`}>
      <div>Unknown : </div>
      <div>{comment}</div>
    </div>
  );
};

export default Comments;
