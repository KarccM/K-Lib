import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuncComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(props.url, {
          header: {
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
        .then((agent) => {
          setData(agent?.data?.data);
        });
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? props.loadingComponent : props.activeComponent(data)}</>;
};

export default FuncComponent;
