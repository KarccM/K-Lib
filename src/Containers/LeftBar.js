import React, { useState, useEffect } from 'react';
import Supervisor from '../Components/Supervisior/index';
import TagsSection from '../Components/TagsFeatures/index';
const LeftBar = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');
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
      setAuthor();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      <Supervisor author={author} />
      <TagsSection loading={loading} tags={tags} />
    </section>
  );
};

export default LeftBar;
