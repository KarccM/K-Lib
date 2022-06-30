import React from 'react';
import DownSection from './Containers/DownSection';
import LeftBar from './Containers/LeftBar';
import Nav from './Containers/Nav';
import UpSection from './Containers/UpSection';
import classes from './main.module.css';

// Assume i know post-id then i should pass it as props for components
// Assume i don't have loading for each comp
const App = () => {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-4 p-20">
        <div className={`${classes.left}`}>
          <LeftBar />
        </div>
        <div className={`col-span-3 ${classes.right}`}>
          <UpSection />
          <DownSection />
        </div>
      </div>
    </>
  );
};

export default App;
