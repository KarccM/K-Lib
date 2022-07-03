import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const FuncComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData({
        name: 'Kareem',
        section: 'Social engineering ',
        opi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.',
      });
      setLoading(false);
    }, 2000);
  }, [props.url]);
  return <>{loading ? props.loadingComponent : props.activeComponent(data)}</>;
};

export default FuncComponent;
