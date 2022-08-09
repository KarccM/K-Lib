import TagsTable from '../Common/TagsTable/index';

export type AbilityType = {
  slot: string,
  description: string,
  displayName: string,
  displayIcon: string
}
type Props = { 
  loading:true|false
  abilities:AbilityType[]
}
const index = ({ loading, abilities }: Props) => {
  return <TagsTable loading={loading} data={abilities} title={'Abilities'} />;
};

export default index;
