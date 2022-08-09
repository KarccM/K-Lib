import Avatar, { genConfig,AvatarFullConfig } from 'react-nice-avatar';

type Props = {
  styles: string,
  info:AvatarFullConfig
}

const AvatarGenerators = ({ styles, info }:Props) => {
  const config = genConfig(info);
  return <Avatar className={`w-32 h-32 ${styles}`} {...config} />;
};
 
export default AvatarGenerators;
