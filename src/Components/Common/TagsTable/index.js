import React from 'react';
import DefaultList from './DefaultList';
import classes from '../../../main.module.css';
import ListOfLoaders from './ListOfLoaders';
import SingleLoader from './SingleLoader';
import { loaders } from './data';
import DeafaultItem from './DeafaultItem';

const Index = ({ loading, data, title }) => {
  return (
    <div className={`${classes.members} basis-1/3`}>
      {loading ? (
        <div>
          <ListOfLoaders spacing={1} title={title}>
            <div className="flex gap-x-2 px-6">
              {loaders.map(({ variant, width, height }) => {
                return (
                  <SingleLoader
                    variant={variant}
                    width={width}
                    height={height}
                  />
                );
              })}
            </div>
          </ListOfLoaders>
        </div>
      ) : (
        <>
          <DefaultList title={title}>
            {data.map((item) => {
              return <DeafaultItem item={item} />;
            })}
          </DefaultList>
        </>
      )}
    </div>
  );
};

export default Index;
