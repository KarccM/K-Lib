import React, { useState, useEffect } from 'react';
import { DataFetcherwithLocalStorage } from '../ApiClient/index';

const FuncComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetcherwithLocalStorage({
      successCb: (data) => {
        setData(data);
        setLoading(false);
      },
      errorCb: (err) => {
        console.log(`err`, err);
      },
      url: props.url,
    });
  }, []);
  return <>{loading ? props.loadingComponent : props.activeComponent(data)}</>;
};

export default FuncComponent;
