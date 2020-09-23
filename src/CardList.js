import React, { useContext } from 'react';

import Card from './Card';
import PeriodContext from './utils/PeriodContext';

const blockchainList = ['sylo', 'ethereum', 'bitcoin', 'centrality'];

const CardList = () => {
  const period = useContext(PeriodContext)[0];
  return (
    <React.Fragment>
      {blockchainList.map((name) => {
        return <Card key={name} name={name} period={period} />;
      })}
    </React.Fragment>
  );
};

export default CardList;
