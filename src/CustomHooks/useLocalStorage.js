import { useState } from 'react';

const useLocalStorage = ({ key, data }) => {
  const [value, setValue] = useState(data);

  let localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) {
    setValue(localValue);
  } else localStorage.setItem({ key, value });

  return { value, setValue };
};

export default useLocalStorage;
