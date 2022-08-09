import { useState, useEffect } from 'react';
import { DataFetcherwithLocalStorage } from '../ApiClient/index';

type FuncComponentType = {
  url: string,
  loadingComponent: JSX.Element,
  activeComponent:(data:any)=> JSX.Element
}

const FuncComponent = ({url,loadingComponent,activeComponent}:FuncComponentType) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetcherwithLocalStorage({
      successCb: (data:any) => {
        setData(data);
        setLoading(false);
      },
      errorCb: (err:any) => {
        console.log(`err`, err);
      },
      url: url,
    });
  }, []);
  return <>{loading ? loadingComponent : activeComponent(data)}</>;
};

export default FuncComponent;
