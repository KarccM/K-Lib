import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ReactBtn {
  name: string;
  state: boolean;
  def_state: JSX.Element;
  active_state: JSX.Element;
}
export const love : ReactBtn = {
  name: 'love',
  state: false,
  def_state: <FavoriteIcon sx={{ color: '#F00' }} />,
  active_state: <FavoriteBorderIcon sx={{ color: '#F00' }} />,
};

export const star : ReactBtn = {
  name: 'star',
  state: false,
  def_state: <StarIcon sx={{ color: '#303841' }} />,
  active_state: <StarOutlineIcon sx={{ color: '#303841' }} />,
};

export const postReaction : ReactBtn[] = [love, star];
