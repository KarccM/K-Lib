import React, { useState, useEffect } from 'react';
import Supervisor from '../Components/Supervisior/index';
const LeftBar = ({ uuid }) => {
  return (
    <section>
      <Supervisor uuid={uuid} />
    </section>
  );
};

export default LeftBar;
