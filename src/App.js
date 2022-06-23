import React from 'react';
import LeftSide from './Containers/LeftSide';
import RightSide from './Containers/RightSide';
import MiddleSide from './Containers/MiddleSide';
import Nav from './Containers/Nav';
import classes from './main.module.css';
// import RefEx from './Containers/RefEx';

// Assume i know post-id then i should pass it as props for components
// Assume i don't have loading for each comp
const App = () => {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-4 p-20">
        <div className={`${classes.left}`}>
          <LeftSide />
        </div>
        <div className={`col-span-3 ${classes.right}`}>
          <MiddleSide />
          <RightSide />
        </div>
      </div>
      {/* <RefEx /> */}
    </>
  );
};

export default App;
