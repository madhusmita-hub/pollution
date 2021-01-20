import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function Header(props) {
  return(
    <View style={{flexDirection: 'row', backgroundColor: Theme.themeColor, elevation: 3,paddingHorizontal: 10}}>
      <Text style={{ color:'#fff', fontFamily:'UbuntuMedium', fontSize:22, paddingVertical: 10}}>{props.title}</Text>
    </View>
  )
}
