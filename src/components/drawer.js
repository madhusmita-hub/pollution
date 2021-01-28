import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../styles/Theme';

export default function drawerComponent({navigation}) {
  const logout = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => gotologin()},
      ],
      {cancelable: false},
    );
  };

  const gotologin = () => {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#189F94',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.headerImgContainer}>
          <Image
            source={require('../assets/img/factory.png')}
            style={styles.headerImg}
          />
        </View>
        <Text style={styles.headerTitle}>
          Personalized Pollution Monitoring
        </Text>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity style={styles.itemCon} onPress={() => {}}>
          <Icon name="person" size={22} color="#048173" />
          <Text style={styles.itemTxt}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemCon}
          onPress={() => navigation.navigate('VisualAQI')}>
          <MaterialCommunityIcon
            name="file-document-edit"
            size={22}
            color="#048173"
          />
          <Text style={styles.itemTxt}>Visual AQI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemCon}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="stats-chart" size={22} color="#048173" />
          <Text style={styles.itemTxt}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemCon}
          onPress={() => navigation.navigate('About')}>
          <Icon name="md-information-circle" size={22} color="#048173" />
          <Text style={styles.itemTxt}>About</Text>
        </TouchableOpacity>

        <Text style={styles.itemTitle}>Communicate</Text>

        <TouchableOpacity style={styles.itemCon}>
          <Icon name="ios-share-social" size={22} color="#048173" />
          <Text style={styles.itemTxt}>Share</Text>
        </TouchableOpacity>

        <View style={{height: 1, backgroundColor: 'lightgrey'}} />

        <TouchableOpacity style={styles.itemCon} onPress={() => logout()}>
          <Icon name="exit" size={22} color="#048173" />
          <Text style={styles.itemTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImgContainer: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    elevation: 3,
    backgroundColor: Theme.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImg: {height: 50, width: 50, resizeMode: 'contain'},
  headerTitle: {
    color: '#fff',
    fontFamily: 'UbuntuMedium',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  itemCon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemTxt: {color: '#048173', fontFamily: 'UbuntuMedium', marginLeft: 15},
  itemTitle: {
    color: 'grey',
    fontFamily: 'UbuntuMedium',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    fontSize: 15,
  },
});
