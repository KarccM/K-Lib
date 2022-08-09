import { useState } from 'react';


type LocalStorage = { 
  key: string,
  data:any
}

const useLocalStorage = ({ key, data }:LocalStorage) => {
  const [value, setValue] = useState(data);

  let localValue = JSON.parse(localStorage.getItem(key)!);
  if (localValue) {
    setValue(localValue);
  } else localStorage.setItem( key , value );

  return { value, setValue };
};

export default useLocalStorage;
