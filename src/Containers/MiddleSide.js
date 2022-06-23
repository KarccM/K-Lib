import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Description from '../Components/Description';
import Comments from '../Components/Comments';
import ReactElements from '../Components/ReactElements';
import Loading from '../Components/Loading';
import classes from '../main.module.css';

const MiddleSide = () => {
  const [details, setDetails] = useState();
  useEffect(() => {
    setTimeout(() => {
      setDetails({
        title: 'Accent Teacher',
        year: '2021-2022',
        description: {
          idea: 'Create Engilsh Teacher For Accent Train, You Can Learn Alot OF Accent Like American,British ...',
          resource: [
            {
              name: 'Github',
              link: 'github.com/fakeApp/ForFun',
            },
            {
              name: 'Paper',
              link: "paperwithcode.com/MadEngilsh/don'tOpenTheLink",
            },
          ],
        },
      });
    }, 2000);
  }, []);
  console.log('middle rendered');
  return (
    <div className={`${classes.upperSection}`}>
      {details ? (
        <>
          <Header year={details.year} title={details.title} />
          <Description description={details.description}>
            <ReactElements />
            <Comments />
          </Description>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MiddleSide;
