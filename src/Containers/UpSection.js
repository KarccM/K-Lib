import React from 'react';
import Header from '../Components/Header';
import Description from '../Components/Description';
import Comments from '../Components/Comments/index';
import Loading from '../Components/Loading';
import classes from '../main.module.css';
import PostReactions from '../Components/PostReactions';
import FuncComponent from '../Components/HOC/FuncComponent';

const UpSection = ({ uuid }) => {
  const meta = {
    loading: <Loading />,
    active: (props) => (
      <>
        {console.log(`props`, props)}
        <Main
          role={props.role.description}
          name={props.displayName}
          description={props.description}
        />
      </>
    ),
    url: `https://valorant-api.com/v1/agents/${uuid}`,
  };

  return (
    <div className={`${classes.upperSection}`}>
      <FuncComponent
        loadingComponent={meta.loading}
        activeComponent={meta.active}
        url={meta.url}
      />
    </div>
  );
};
const Main = ({ role, description, name }) => {
  return (
    <div className="p-6">
      <div div className="flex pb-10">
        <Header role={role} name={name} />
        <PostReactions />
      </div>
      <Description description={description}>
        <Comments />
      </Description>
    </div>
  );
};
export default UpSection;
