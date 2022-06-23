import React, { useState, useEffect } from 'react';
import Supervisor from '../Components/Supervisior/index';
import TagsSection from '../Components/TagsFeatures/index';
const LeftSide = () => {
  console.log('left rendered');

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setData({
        name: 'Kareem',
        section: 'Social engineering ',
        opi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.',
      });
      setTags([
        'CNN',
        'Ai',
        'Networing',
        'DeepLearing',
        'Attention Model',
        'CTC-Attention',
        'Hybird-Model',
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      <Supervisor name={data.name} opi={data.opi} section={data.section} />
      <TagsSection loading={loading} tags={tags} />
    </section>
  );
};

export default LeftSide;
