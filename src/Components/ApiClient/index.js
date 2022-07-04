import axios from 'axios';
export const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const DataFetcher = ({ successCb, errorCb, url }) => {
  axiosInstance
    .get(url)
    .then((agent) => {
      successCb(agent?.data?.data);
    })
    .catch((err) => {
      errorCb(err);
    });
};

export const DataFetcherWithTimeOut = ({ successCb, errorCb, url }) => {
  setTimeout(() => {
    axiosInstance
      .get(url)
      .then((agent) => {
        successCb(agent?.data?.data);
      })
      .catch((err) => {
        errorCb(err);
      });
  }, 2000);
};
