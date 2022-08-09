import axios, { AxiosInstance } from 'axios';

export const axiosInstance:AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

type FetchInstance = {
  successCb: Function,
  errorCb: Function,
  url:string
}

export const DataFetcher = ({ successCb, errorCb, url}:FetchInstance) => {
  axiosInstance
    .get(url)
    .then((agent) => {
      successCb(agent?.data?.data);
    })
    .catch((err) => {
      errorCb(err);
    });
};

export const DataFetcherWithTimeOut = ({ successCb, errorCb, url }:FetchInstance) => {
  setTimeout(() => {
    DataFetcher({ successCb, errorCb, url });
  }, 2000);
};

export const DataFetcherwithLocalStorage = ({ successCb, errorCb, url }:FetchInstance) => {
  let localValue: any = localStorage.getItem(url)
    ? JSON.parse(localStorage.getItem(url)!)
    : false;
  if (localValue) {
    successCb(localValue);
  } else {
    DataFetcher({
      successCb: (data:any) => {
        localStorage.setItem(url, JSON.stringify(data));
        successCb(data);
      },
      errorCb: (err:any) => {
        console.log(`err`, err);
      },
      url: url,
    });
  }
};
