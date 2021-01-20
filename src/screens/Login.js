import React, {useEffect, useState, useRef} from 'react';
import {View, SafeAreaView, Text, StatusBar,Image, StyleSheet,TouchableOpacity,Button} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

export default function Login() {

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);


  const gotodashboard = () => {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{ name: "Dashboard" }]
      })
    });
  }

  return(
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
              <Image source={require('../assets/img/factory.png')} style={styles.imgStyle} />
              <Text style={styles.txtStyle}>Personalized Pollution Monitoring</Text>
              <Text style={[styles.txtStyle,{marginTop:15}]}>LOGIN</Text>
            </View>
            <View style={{flex:1,width: '100%',alignItems: 'center', justifyContent: 'space-around'}}>
              <TextInput
                label="Name"
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.inputStyle}
                underlineColor="#056659"
                selectionColor="#B62B66"
                dense={true}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                underlineColorAndroid="transparent"
              />
              <TextInput
                ref={passwordRef}
                label="Password"
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.inputStyle}
                underlineColor="#056659"
                selectionColor="#B62B66"
                secureTextEntry={true}
                dense={true}
                underlineColorAndroid="transparent"
              />

              <TouchableOpacity style={styles.loginBtn}
                onPress={() => gotodashboard()}>
                <Text style={styles.loginTxt}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}} style={{marginTop: 20}}>
                <Text style={styles.lnkTxt}>New User ?  Sign up</Text>
              </TouchableOpacity>
            </View>

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
    backgroundColor: '#018577',
    alignItems: 'center',
    justifyContent: 'space-around', padding:10
  },
  imgStyle: {height: 100, width: 100, resizeMode: 'contain'},
  txtStyle: {
    color: '#fff',
    fontFamily: 'UbuntuMedium',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 10,
  },
  inputStyle: {width: '60%', backgroundColor: 'transparent', paddingHorizontal: 0,},
  lnkTxt: {
    color: '#fff',
    fontFamily: 'UbuntuMedium',
    textAlign: 'center',
  },
  loginBtn: {marginTop:10,backgroundColor: '#D6D8D7', elevation: 3, borderRadius: 5, width: '50%', alignItems: 'center'},
  loginTxt: {paddingHorizontal: 20, paddingVertical: 10, fontFamily: 'UbuntuMedium'}
});
