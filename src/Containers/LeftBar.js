import React, { useState, useEffect } from 'react';
import Supervisor from '../Components/Supervisior/index';
import TagsSection from '../Components/TagsFeatures/index';
const LeftBar = ({ uuid }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
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
      <Supervisor uuid={uuid} />
      <TagsSection loading={loading} tags={tags} />
    </section>
  );
};

export default LeftBar;
