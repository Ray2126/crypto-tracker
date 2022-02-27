import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import Navbar from '../components/Navbar';
import CoinDetails from '../components/CoinDetails';
import PeriodContext from '../PeriodContext';
import colors from '../styles/colors';
import typography from '../styles/typography';

const DetailsScreen = ({ navigation, route }) => {
  const selectedCoin = route.params.selectedCoin;
  const period = useContext(PeriodContext)[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          <Ionicons
            name="ios-arrow-back"
            size={25}
            color={colors.primary}
          />
        </TouchableWithoutFeedback>
        <View style={styles.coinContainer}>
          <Image
            source={{ uri: selectedCoin.imageUrl }}
            style={styles.coinIcon}
          />
          <Text style={styles.coinName}>{ selectedCoin.name }</Text>
        </View>
        {/* This View is used to center the coin icon and name */}
        <View style={styles.placeHolder}/>
      </View>
      <Navbar />
      
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc'}
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
      
      <View style={styles.pricesContainer}>
        <Text style={styles.currentPrice}>
          {`$${selectedCoin.currentPrice}`}
        </Text>
        <Text style={styles.priceChange}>
          { selectedCoin.priceChangePercentage24Hr }
        </Text>
      </View>
      <CoinDetails coin={selectedCoin} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: '8%',
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  placeHolder: {
    width: 25,
    height: 25,
  },
  coinContainer: {
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
  pricesContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  currentPrice: {
    ...typography.body,
    color: colors.primary,
  },
  priceChange: {
    ...typography.caption,
    color: colors.positive,
  },
});
