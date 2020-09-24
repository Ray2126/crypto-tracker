import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getDataHook = (period) => {
  const [tokenInfo, setTokenInfo] = useState([]);
  const [tokenRates, setTokenRates] = useState([]);
  useEffect(() => {
    axios
      .get(`https://assets-api.sylo.io/v2/all?has_history_only=true`)
      .then((res) => {
        setTokenInfo(res.data);
        res.data.forEach((blockchain, i) => {
          axios
            .get(
              `https://assets-api.sylo.io/v2/asset/id/${blockchain.id}/rate?fiat=NZD&period=${period}&type=historic`
            )
            .then((res) => {
              //Get the history of the rate as an array
              let history = res.data.history.map((item) => {
                return item['rate'];
              });
              //Get id this data belongs to
              const id = res.config.url.substring(
                res.config.url.indexOf('id/') + 3,
                res.config.url.indexOf('/rate')
              );
              setTokenRates((tokenRates) => [
                ...tokenRates,
                { graphData: history, tokenRates: res.data, id: id },
              ]);
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }, [period]);

  return { tokenInfo, tokenRates };
};

export default getDataHook;
