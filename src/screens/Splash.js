import React, {useEffect} from 'react';
import {View, SafeAreaView, Text, StatusBar,Image, StyleSheet} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import Theme from '../styles/Theme';

export default function Splash() {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Login');
      navigation.dispatch(
        StackActions.replace('Login')
      );
    },500);
  });

  return(
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
            <Image source={require('../assets/img/factory.png')} style={styles.imgStyle} />
            <Text style={styles.txtStyle}>Pollution Monitoring</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
  },
  container: {
    flex:1,
    backgroundColor: Theme.themeColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgStyle: {height: 80, width: 80, resizeMode: 'contain'},
  txtStyle: {color: '#fff', fontFamily: 'UbuntuBold', fontSize: 25,letterSpacing: 1.5,
            marginTop: 10, textShadowColor:'black',  textShadowRadius:20, textShadowOffset: {width: 1,height: 2}}
});
