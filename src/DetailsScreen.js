import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Navbar from './Navbar';
import DetailedCard from './DetailedCard';
import DetailedText from './DetailedText';
import PeriodContext from './utils/PeriodContext';
import TokenDetailsContext from './utils/TokenDetailsContext';
import getDataHook from './utils/getDataHook';

const DetailsScreen = ({ navigation }) => {
  const [tokenInfo, tokenData] = useContext(TokenDetailsContext)[0];
  const period = useContext(PeriodContext)[0];
  const { tokenRates } = getDataHook(period);

  //Find corresponding token data to use
  const idToFind = tokenInfo.id;
  const arr = tokenRates.map((e) => {
    return e.id;
  });
  const idIndex = arr.lastIndexOf(idToFind);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <Ionicons
          name="ios-arrow-back"
          size={25}
          color="black"
          style={styles.backButton}
        />
      </TouchableWithoutFeedback>
      <View style={styles.titleContainer}>
        <Image
          source={{ uri: tokenInfo.icon_address }}
          style={styles.icon}
        />
        <Text style={styles.titleFont}>{tokenInfo.name}</Text>
      </View>
      <Navbar />
      <DetailedCard data={tokenRates[idIndex]} />
      <DetailedText info={tokenInfo} data={tokenData} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingTop: '8%',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: '2%',
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginBottom: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFont: {
    fontSize: 18,
    lineHeight: 21,
    color: '#495162',
  },
  backButton: {
    marginRight: '80%',
    paddingRight: '5%',
    transform: [{ translateY: 28 }],
  },
});
