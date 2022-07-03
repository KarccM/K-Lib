import React from 'react';
import MembersList from './MembersList';
import SingleMemberImg from './SingleMemberImg';
import classes from '../../main.module.css';
import DefaultHeader from '../Common/TagsTable/DefaultHeader';
import Loading from './Loading';
import FuncComponent from '../HOC/FuncComponent';
const mems = [1, 2, 3, 4];
const index = () => {
  const meta = {
    loading: <Loading />,
    active: () => {
      return mems.map((idx) => {
        return <SingleMemberImg key={idx} />;
      });
    },
  };
  return (
    <div className={`${classes.members} basis-1/3`}>
      <DefaultHeader title={'Group Members'} />
      <MembersList>
        <FuncComponent
          loadingComponent={meta.loading}
          activeComponent={meta.active}
        />
      </MembersList>
    </div>
  );
};

export default index;
