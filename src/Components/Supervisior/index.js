import React from 'react';
import Supervisor from './Supervisor';
import classes from '../../main.module.css';
import Loading from './Loading';
import FuncComponent from '../HOC/FuncComponent';

const index = ({ uuid }) => {
  const meta = {
    loading: <Loading />,
    active: (props) => <Supervisor {...props} />,
    url: `https://valorant-api.com/v1/agents/${uuid}`,
  };

  return (
    <div className={`${classes.members} basis-1/3`}>
      <div className="flex flex-col justify-center items-center gap-y-2 my-2">
        <FuncComponent
          loadingComponent={meta.loading}
          activeComponent={meta.active}
          url={meta.url}
        />
      </div>
    </div>
  );
};

export default index;
