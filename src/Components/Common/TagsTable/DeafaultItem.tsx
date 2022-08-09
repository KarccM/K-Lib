import { Avatar } from '@mui/material';
import setRandomStyle from '../../../CustomHooks/setRandomStyle';
import { ItemTypeObject } from './Types';

const DeafaultItem = ({ item }:ItemTypeObject) =>
{
  const style = setRandomStyle();
  console.log(`item`, item)
  return (
    <>
      {typeof item !== 'string' ? (
        <Avatar src={item?.displayIcon} alt={item?.displayName} />
      ) : (
        <button
          className={`rounded-md mx-1 px-2 py-2 inline-block my-2 ` + style}
        >
          {item}
        </button>
      )}
    </>
  );
};

export default DeafaultItem;
