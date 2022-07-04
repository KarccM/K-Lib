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
    DataFetcher({ successCb, errorCb, url });
  }, 2000);
};

export const DataFetcherwithLocalStorage = ({ successCb, errorCb, url }) => {
  let localValue = localStorage.getItem(url)
    ? JSON.parse(localStorage.getItem(url))
    : false;
  if (localValue) {
    successCb(localValue);
  } else {
    DataFetcher({
      successCb: (data) => {
        localStorage.setItem(url, JSON.stringify(data));
        successCb(data);
      },
      errorCb: (err) => {
        console.log(`err`, err);
      },
      url: url,
    });
  }
};
