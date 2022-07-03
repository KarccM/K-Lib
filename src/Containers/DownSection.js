import React, { useState, useEffect } from 'react';
import Members from '../Components/Members/index';
import classes from '../main.module.css';
import LanguageSection from '../Components/LanguagesFeature/index';
import Rating from '../Components/Rating';
const DownSection = () => {
  const [loading, setLoading] = useState(true);
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLangs(['Python', 'C++', 'C#', 'R']);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={`${classes.downSection}`}>
      <Members loading={loading} />
      <LanguageSection langs={langs} loading={loading} />
      <Rating rate={6.5} />
    </div>
  );
};

export default DownSection;
