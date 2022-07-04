import React, { useState } from 'react';
import MembersList from './MembersList';
import SingleMemberImg from './SingleMemberImg';
import classes from '../../main.module.css';
import DefaultHeader from '../Common/TagsTable/DefaultHeader';
import Loading from './Loading';
import FuncComponent from '../HOC/FuncComponent';
const Index = () => {
  const [chars, setChars] = useState([]);
  const meta = {
    loading: <Loading />,
    active: (props) => {
      setChars(props);
      return chars
        .slice(0, 5)
        .map(({ displayIconSmall, displayName, uuid }) => {
          return (
            <SingleMemberImg
              src={displayIconSmall}
              alt={displayName}
              key={uuid}
            />
          );
        });
    },
  };
  return (
    <div className={`${classes.members} basis-1/3`}>
      <DefaultHeader title={'Agents'} />
      <MembersList>
        <FuncComponent
          loadingComponent={meta.loading}
          activeComponent={meta.active}
          url="https://valorant-api.com/v1/agents"
        />
      </MembersList>
    </div>
  );
};

export default Index;
