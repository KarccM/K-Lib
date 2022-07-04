import React, { useState, useEffect } from 'react';
import Members from '../Components/Members/index';
import classes from '../main.module.css';
import LanguageSection from '../Components/LanguagesFeature/index';
import Rating from '../Components/Rating';
import { DataFetcher } from '../Components/ApiClient';
const DownSection = ({ uuid }) => {
  const [loading, setLoading] = useState(true);
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    DataFetcher({
      successCb: (agent) => {
        setLangs(agent.abilities);
      },
      url: `https://valorant-api.com/v1/agents/${uuid}`,
    });
    setLoading(false);
  }, []);
  return (
    <div className={`${classes.downSection}`}>
      <Members />
      <LanguageSection langs={langs} loading={loading} />
      <Rating rate={9.5} />
    </div>
  );
};

export default DownSection;
