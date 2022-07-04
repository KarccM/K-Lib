import React, { useState, useEffect } from 'react';
import { DataFetcher } from '../ApiClient/index';

const FuncComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetcher({
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
