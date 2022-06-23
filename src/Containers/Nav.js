import React, { useState } from 'react';
import { s } from '../Components/Members/data';
import classes from '../main.module.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const style = `transition hover:scale-110 duration-200 ${classes.item}`;
const Nav = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`${classes.nav}`}>
      <div className={`${classes.section} justify-center`}>
        <div
          className={`w-1/3 text-center text-4xl rounded-2xl px-2 bg-black font-bold py-2 my-4 ${classes.logo}`}
        >
          ITE-Library
        </div>
      </div>
      <div className={`${classes.section} justify-center`}>
        <button className={style} key={'home'}>
          Home
        </button>
        <button className={style} key={'about'}>
          About
        </button>
        <button className={style} key={'projects'}>
          Projects
        </button>
      </div>
      <div className={`${classes.section} justify-end pr-6`}>
        <button
          className="mr-6"
          onClick={() => {
            if (theme === 'light') {
              document.documentElement.setAttribute('data-theme', 'dark');
              setTheme('dark');
            } else {
              document.documentElement.setAttribute('data-theme', 'light');
              setTheme('light');
            }
          }}
        >
          <DarkModeIcon fontSize="large" />
        </button>
        <img src={s} alt="user" className={`${classes.profile_img}`} />
      </div>
    </div>
  );
};

export default Nav;
