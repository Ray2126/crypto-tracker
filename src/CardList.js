import React from 'react';
import Card from './Card';

const blockchainList = ['sylo', 'ethereum', 'bitcoin', 'centrality'];

const CardList = () => {
  return (
    <React.Fragment>
      {blockchainList.map((name) => {
        return <Card key={name} name={name} period="week" />;
      })}
    </React.Fragment>
  );
};

export default CardList;
