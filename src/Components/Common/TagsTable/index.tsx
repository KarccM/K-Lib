import React from 'react';
import DefaultList from './DefaultList';
import classes from '../../../main.module.css';
import ListOfLoaders from './ListOfLoaders';
import SingleLoader from './SingleLoader';
import { loaders } from './data';
import DeafaultItem from './DeafaultItem';
import {ItemType} from './Types'
type Props = {
  loading: boolean,
  data: any,
  title:string
}
export type VariantType= "text" | "rectangular" | "circular" | undefined 
export type SkeletonType = {
  width: number,
  height: number,
  variant: VariantType,
}

const Index = ({ loading, data, title }:Props) => {
  return (
    <div className={`${classes.members} basis-1/3`}>
      {loading ? (
        <div>
          <ListOfLoaders spacing={1} title={title}>
            <div className="flex gap-x-2 px-6">
              {loaders.map((props:SkeletonType, index:number) => {
                return (
                  <SingleLoader
                    key={index}
                    variant={props.variant}
                    width={props.width}
                    height={props.height}
                  />
                );
              })}
            </div>
          </ListOfLoaders>
        </div>
      ) : (
        <>
          <DefaultList title={title}>
            {data.map((item:ItemType, index:number) => {
              return <DeafaultItem item={item} key={index} />;
            })}
          </DefaultList>
        </>
      )}
    </div>
  );
};

export default Index;
