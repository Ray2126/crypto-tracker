import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import CoinDetails from '../components/CoinDetails';
import Chart from '../components/Chart';
import coinGeckoClient from '../models/coinGeckoClient';
import PeriodContext from '../PeriodContext';
import colors from '../styles/colors';
import typography from '../styles/typography';

const DetailsScreen = ({ route }) => {
  const selectedCoin = route.params.selectedCoin;
  const period = useContext(PeriodContext)[0];
  const [ selectedCoinPrices, setSelectedCoinPrices ] = useState();
  useEffect(() => {
    (async () => {
      setSelectedCoinPrices(await coinGeckoClient.getHistoricalDataForCoin({
        currency: 'usd',
        coinId: selectedCoin.id,
        period,
      })
      );
    })();
  }, [period]);

  return selectedCoinPrices ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: selectedCoin.imageUrl }}
          style={styles.coinIcon}
        />
        <Text style={styles.coinName}>{ selectedCoin.name }</Text>
      </View>
      <Navbar />

      <Chart graphData={selectedCoinPrices.toGraphData()} />

      <CoinDetails coin={selectedCoin} />
    </View>
  ) : <Text>Loading...</Text>;
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: '8%',
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: 36,
    height: 36,
    marginRight: '2%',
  },
  coinName: {
    ...typography.title,
    color: colors.primary,
  },
});
