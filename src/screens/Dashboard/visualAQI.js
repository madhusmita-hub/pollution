import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Theme from '../../styles/Theme';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import database from '../../../config';
import * as firebase from 'firebase';

const {width, height} = Dimensions.get('window');



export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(1);


  // useEffect(() => {
  //   const onChildAdd = database()
  //     .ref('/data2')
  //     .on('child_added', snapshot => {
  //       console.log('A new node has been added', snapshot.val());
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database()
  //       .ref('/data2')
  //       .off('child_added', onChildAdd);
  // }, []);
  const data = [
    {id: 0, value: 'Good', color: '#00AF52', aqi: 30.354},
    {id: 1, value: 'Moderate', color: '#FEFD05', aqi: 90.001},
    {id: 2, value: 'Unhealthy for sensitive', color: '#FF9E03', aqi: 110.76},
    {id: 3, value: 'Unhealthy', color: '#F2061C', aqi: 180.45},
    {id: 4, value: 'Very unhealthy', color: '#752E9E', aqi: 240.99},
    {id: 5, value: 'Hazardous', color: '#9B3A31', aqi: 330.99},
  ];

  const _renderItem = ({item, index}) => {
    var borderStyle =
      index == 0 ? {borderTopLeftRadius: 12, borderBottomLeftRadius: 12} : {};
    borderStyle =
      index == data.length - 1
        ? {borderTopRightRadius: 12, borderBottomRightRadius: 12}
        : borderStyle;

    var isLeftEdge = index == 0 ? true : false;
    var isRightEdge = index == data.length - 1 ? true : false;

    var middleBorder = index == selectedIndex ? 3 : 0.5;

    return (
      <TouchableOpacity
        onPress={() => selectItem(index)}
        style={[
          borderStyle,
          {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: isLeftEdge ? 2 : middleBorder,
            borderRightWidth: isRightEdge ? 2 : middleBorder,
            borderColor: index == selectedIndex ? '#fff' : '#000',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 20,
          },
        ]}>
        <Text
          style={{
            width: width * 0.16,
            color: '#fff',
            fontSize: 11,
            textAlign: 'center',
            fontFamily: 'UbuntuMedium',
          }}>
          {item.value}
        </Text>
        <Text>{item.aqi}</Text>
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 20 / 2,
            backgroundColor: item.color,
          }}
        />
      </TouchableOpacity>
    );
  };

  const selectItem = (i) => {
    setSelectedIndex(i);
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <Header title="Pollution Monitoring" />

      <View style={styles.container}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 140,
              width: 140,
              borderRadius: 140 / 2,
              borderWidth: 3.6,
              borderColor: '#000',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'UbuntuRegular',
                paddingVertical: 2,
              }}>
              AQI
            </Text>
            <Text
              style={{
                color: '#000',
                fontFamily: 'UbuntuBold',
                fontSize: 16,
                paddingVertical: 2,
              }}>
           110.76
            </Text>
            <View
              style={{
                backgroundColor: '#000',
                height: 2,
                width: '90%',
                alignSelf: 'center',
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 6,
              }}>
              <Icon name="thermometer-half" size={26} color="#000" />
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: 'UbuntuRegular',
                  fontSize: 15,
                }}>
                25{'\u00B0'}C
              </Text>
            </View>
          </View>
          <View style={{height: height * 0.2, marginTop: 10}}>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={_renderItem}
              keyExtractor={(item) => item.id.toString()}
              style={{}}
            />
          </View>
        </View>

        <View style={{flex: 1.5}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
            }}>
            <View style={{}}>
              <Text>Date</Text>
              <Text style={{marginTop: 10, textAlign: 'center'}}>
                02.09.2020
              </Text>
            </View>
            <View style={{}}>
              <Text>Humidity</Text>
              <Text style={{marginTop: 10, textAlign: 'center'}}>67.5</Text>
            </View>
            <View style={{}}>
              <Text>Dew</Text>
              <Text style={{marginTop: 10, textAlign: 'center'}}>16.4</Text>
            </View>
            <View style={{}}>
              <Text>Temperature</Text>
              <Text style={{marginTop: 10, textAlign: 'center'}}>32</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1.5,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              {/* <Text
                style={{
                  flex: 2,
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'UbuntuBold',
                  textAlign: 'center',
                }}>
                Sulphur Dioxide
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'UbuntuBold',
                  textAlign: 'center',
                }}>
                40%
              </Text> */}
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
              <Text style={styles.loginTxt}>VIEW PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Theme.themeColor,
  },
  container: {
    flex: 1,
    // backgroundColor: Theme.themeColor,
  },
  loginBtn: {
    marginTop: 10,
    backgroundColor: '#D6D8D7',
    elevation: 3,
    borderRadius: 3,
    width: '50%',
    alignItems: 'center',
  },
  loginTxt: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'UbuntuMedium',
  },
});
