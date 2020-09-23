import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getDataHook = (name, period) => {
  const [graphData, setGraphData] = useState([]);
  const [tokenRates, setTokenRates] = useState({});
  const [tokenInfo, setTokenInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://assets-api.sylo.io/v2/all?has_history_only=true&search=${name}`
      )
      .then((res) => {
        setTokenInfo(res.data[0]);
        axios
          .get(
            `https://assets-api.sylo.io/v2/asset/id/${res.data[0].id}/rate?fiat=NZD&period=${period}&type=historic`
          )
          .then((res) => {
            let history = res.data.history.map((item) => {
              return item['rate'];
            });
            setTokenRates(res.data);
            setGraphData(history);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [name, period]);

  return {
    graphData: graphData,
    tokenRates: tokenRates,
    tokenInfo: tokenInfo,
  };
};

export default getDataHook;
