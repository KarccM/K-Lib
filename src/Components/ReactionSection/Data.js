import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const love = {
  name: 'love',
  state: false,
  def_state: <FavoriteIcon sx={{ color: '#F00' }} />,
  active_state: <FavoriteBorderIcon sx={{ color: '#F00' }} />,
};

export const star = {
  name: 'star',
  state: false,
  def_state: <StarIcon sx={{ color: '#303841' }} />,
  active_state: <StarOutlineIcon sx={{ color: '#303841' }} />,
};

export const postReaction = [love, star];
