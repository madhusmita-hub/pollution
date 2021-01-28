import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import Header from '../components/header';

export default function About() {
  const navigation = useNavigation();

  const txt =
    'The objective of this module is to develop a real-time air pollution monitoring and alerting system. The Pollution Management System is a real-time pollution data acquisition platform which comprises a synergy of hardware, software and cloudware blocks. The proposed work consists of a full stack IoT architecture consisting of environmental sensors connected to a Rasperry Pi, gathering data from the physical environment and redirecting it to the above cloudware using HTTP. The  cloudware in this context is a NoSQL cloud database which constantly receives air quality data from the sensing nodes distributed over a vast area. Each individual sensor node measures multiple parameters viz, particulate matter (PM2.5/PM10), carbon dioxide, carbon monoxide, oxygen, ozone, methane, wind speed, temperature, humidity and dew-point. Based upon these concentration values, an Air Quality Index (AQI) is calculated following a dynamic time-weighted mean algorithm.';

  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <Header title="Pollution Monitoring" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.pageContent}>
            <Image
              source={require('../assets/img/sample.jpg')}
              style={styles.imgStyle}
            />
            <Text style={styles.txtStyle}>{txt}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#018577',
    padding: 10,
  },
  pageContent: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 7,
    borderRadius: 10,
  },
  imgStyle: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  txtStyle: {
    textAlign: 'justify',
  },
});
