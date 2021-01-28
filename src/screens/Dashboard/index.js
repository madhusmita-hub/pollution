import React, {Component, useState} from 'react';
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
const {width, height} = Dimensions.get('window');
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyCgVSPU6AxK3sJibRjCBh2Qo5bjxXJ8GWI',
  authDomain: 'polutionrn2.firebaseapp.com',
  databaseURL: 'https://polutionrn2-default-rtdb.firebaseio.com',
  projectId: 'polutionrn2',
  storageBucket: 'polutionrn2.appspot.com',
  messagingSenderId: '237257349836',
  appId: '1:237257349836:web:26b28c0e9ef3dd6b768069',
  measurementId: 'G-JF6W1485E4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CH4: '',
      CO2: '',
      text: '',
      mylist: [],
      studentslist: {},
    };
  }

  componentDidMount() {
    const myItems = firebase.database().ref('/users');
    myItems.on('value', (datasnap) => {
      // console.log((datasnap.val()))
      console.log(Object.values(datasnap.val()));
      // alert(JSON.stringify(datasnap))
      this.setState({mylist: Object.values(datasnap.val())});
    });
  }

  render() {
    const myItems = this.state.mylist.map((item, index) => {
      return (
        <View>
          <Text>CH4:{item.CH4}</Text>
          {/* <Text>CO2:{item.CO2}</Text>
          <Text>NH3:{item.NH3}</Text>
          <Text>Windspeed:{item.Windspeed}</Text> */}
        </View>
      );
    });

    return (
      <SafeAreaView style={styles.pageContainer}>
        <StatusBar barStyle="dark-content" />
        <Header title="Pollution Monitoring" />
        <View style={[styles.container, {marginHorizontal: width * 0.15}]}>
          <Text
            style={{
              fontFamily: 'UbuntuBold',
              fontSize: 23,
              color: '#fff',
              marginBottom: 10,
            }}>
            DASHBOARD
          </Text>
          <View style={styles.itemRow}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DataDetails", { data: this.state.mylist })}
            style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>SO</Text>
                <Text style={styles.subTxt}>2</Text>
                <Text style={styles.subTxt}>
                 {/* {myItems} */}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>CO</Text>
                <Text style={styles.subTxt}>2</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>NH</Text>
                <Text style={styles.subTxt}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>O</Text>
                <Text style={styles.subTxt}>3</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={{color: 'black', fontFamily: 'UbuntuMedium'}}>
                  PM{'\n'}2.5
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>O</Text>
                <Text style={styles.subTxt}>2</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={styles.itemTxt}>CH</Text>
                <Text style={styles.subTxt}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.itemInner}>
                <Text style={{color: 'black', fontFamily: 'UbuntuMedium'}}>
                  Wind{'\n'}Speed
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
              elevation: 3,
              width: '60%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontFamily: 'UbuntuMedium',
              }}>
              EXPOSURE
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Theme.themeColor,
  },
  container: {
    flex: 1,
    // backgroundColor: Theme.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemContainer: {
    width: height * 0.15,
    height: height * 0.12,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  itemInner: {flexDirection: 'row', justifyContent: 'center'},
  itemTxt: {fontFamily: 'UbuntuMedium', color: 'black', lineHeight: 30},
  subTxt: {lineHeight: 37},
});
