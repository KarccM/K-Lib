import React, { useState } from 'react';
import classes from '../main.module.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AvatarGenerators from '../Components/Common/AvatarGenerators';

const style = `transition hover:scale-110 duration-200 ${classes.item}`;
const Nav = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`${classes.nav}`}>
      <div className={`${classes.section} justify-start`}>
        <div
          className={`w-auto ml-4 text-center rounded-2xl px-2 bg-black font-bold py-2 my-4 ${classes.logo}`}
        >
          Riot-Valorant
        </div>
      </div>
      <div className={`${classes.section} justify-center`}>
        <button className={style} key={'home'}>
          Agents
        </button>
        <button className={style} key={'about'}>
          About
        </button>
        <button className={style} key={'projects'}>
          Maps
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
        <AvatarGenerators styles={`${classes.profile_img}`} />
      </div>
    </div>
  );
};

export default Nav;
