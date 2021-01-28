import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Theme from '../styles/Theme';

export default function Header(props) {
  return(
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor: Theme.themeColor, elevation: 3,paddingHorizontal: 10}}>
      <Text style={{ color:'#fff', fontFamily:'UbuntuMedium', fontSize:22, paddingVertical: 10}}>{props.title}</Text>
    </View>
  )
}
