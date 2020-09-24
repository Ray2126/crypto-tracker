import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Navbar from './Navbar';
import DetailedCard from './DetailedCard';
import TokenDetailsContext from './utils/TokenDetailsContext';
import DetailedText from './DetailedText';

const DetailsScreen = ({ navigation }) => {
  const tokenDetails = useContext(TokenDetailsContext)[0];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          <Ionicons
            name="ios-arrow-back"
            size={25}
            color="black"
            style={styles.backButton}
          />
        </TouchableWithoutFeedback>
        <Image
          source={{ uri: tokenDetails[0].icon_address }}
          style={styles.icon}
        />
        <Text style={styles.titleFont}>{tokenDetails[0].name}</Text>
      </View>
      <Navbar />
      <DetailedCard info={tokenDetails[0]} data={tokenDetails[1]} />
      <DetailedText info={tokenDetails[0]} data={tokenDetails[1]} />
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
    paddingTop: '15%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginBottom: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '37%',
  },
  titleFont: {
    fontSize: 18,
    lineHeight: 21,
    color: '#495162',
  },
  backButton: {
    marginRight: '30%',
  },
});
