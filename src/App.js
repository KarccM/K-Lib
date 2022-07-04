import React, { useState, useEffect } from 'react';
import DownSection from './Containers/DownSection';
import LeftBar from './Containers/LeftBar';
import Nav from './Containers/Nav';
import UpSection from './Containers/UpSection';
import classes from './main.module.css';
import { DataFetcher } from './Components/ApiClient';
import VCard from './Containers/VCard';

const App = () => {
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState({});
  const [flag, setFlag] = useState(false);
  const handleInfo = (e) => {
    for (const ag of agents) {
      if (ag.uuid === e) {
        setAgent(ag);
        break;
      }
    }
    if (agent) setFlag(true);
  };

  useEffect(() => {
    DataFetcher({
      successCb: (agents) => {
        console.log(`agents`, agents);
        setAgents(agents);
      },
      errorCb: (err) => {
        console.log(`err`, err);
      },
      url: 'https://valorant-api.com/v1/agents',
    });
  }, []);
  return (
    <>
      <div className={`${classes.content}`}>
        <Nav />
        {flag ? (
          <>
            <div className="grid grid-cols-4 py-10">
              <div className={`${classes.left}`}>
                <LeftBar uuid={agent.uuid} />
              </div>
              <div className={`col-span-3 ${classes.right}`}>
                <UpSection />
                <DownSection />
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-4 gap-y-10 justify-center item">
            {agents.map((agent) => {
              return (
                <VCard
                  key={agent.uuid}
                  uuid={agent.uuid}
                  src={agent.displayIconSmall}
                  name={agent.displayName}
                  desc={agent.description}
                  handleInfo={handleInfo}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
