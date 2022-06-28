import { Stack } from '@mui/material';
import React from 'react';
import MembersList from './MembersList';
import SingleImgLoader from './SingleImgLoader';
import SingleMemberImg from './SingleMemberImg';
import classes from '../../main.module.css';
import DefaultHeader from '../Common/TagsTable/DefaultHeader';
const mems = [1, 2, 3, 4];

const index = ({ loading }) => {
  return (
    <div className={`${classes.members} basis-1/3`}>
      <DefaultHeader title={'Group Members'} />
      <MembersList>
        {loading ? (
          <Stack>
            <div className="flex flex-row -space-x-1.5">
              {mems.map(() => {
                return <SingleImgLoader />;
              })}
            </div>
          </Stack>
        ) : (
          mems.map((m) => {
            return <SingleMemberImg />;
          })
        )}
      </MembersList>
    </div>
  );
};

export default index;
