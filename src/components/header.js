import React from 'react';
import {View, Text, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import {DrawerActions,useNavigation, navigation,NavigationContainer} from '@react-navigation/native';


import Theme from '../styles/Theme';

export default function Header(props) {
  return (
    <View
      style={{
        // justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Theme.themeColor,
        elevation: 3,
        // paddingHorizontal: 10,
        paddingLeft:5 ,
        flexDirection:"row"
      }}>
        <TouchableOpacity>
        <Image source={require("../assets/img/menu.png")}
        style={{height:20,width:20, marginTop:10, marginRight:10}}
        />
        </TouchableOpacity>
      <Text
        style={{
          color: '#fff',
          fontFamily: 'UbuntuMedium',
          fontSize: 22,
          paddingVertical: 10,
        }}>
        {props.title}
      </Text>
    </View>
  );
}
