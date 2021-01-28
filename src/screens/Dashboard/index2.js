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
  apiKey: "AIzaSyCgVSPU6AxK3sJibRjCBh2Qo5bjxXJ8GWI",
  authDomain: "polutionrn2.firebaseapp.com",
  databaseURL: "https://polutionrn2-default-rtdb.firebaseio.com",
  projectId: "polutionrn2",
  storageBucket: "polutionrn2.appspot.com",
  messagingSenderId: "237257349836",
  appId: "1:237257349836:web:26b28c0e9ef3dd6b768069",
  measurementId: "G-JF6W1485E4"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }



class Dashboard extends Component {

 constructor(props) {
   super(props)
    this.state = {
      CH4:"",
      CO2:"",
      text:"",
      mylist:[],
      studentslist:{}
    }
   };

   componentDidMount() {
    const myItems = firebase.database().ref('/users')
    myItems.on("value", datasnap=>{
      // console.log((datasnap.val()))
      console.log(Object.values(datasnap.val()))
      // alert(JSON.stringify(datasnap))
      this.setState({mylist: Object.values(datasnap.val())})
    })
      
  }


  keyExtractor = (item, index) => index.toString();
  renderHistory = ({item, index}) => (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.container, {marginHorizontal: width * 0.15}]}>
       
        <View style={styles.itemRow}>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemInner}>
              <Text style={styles.itemTxt}>CH2: {item.CH2}</Text>
              {/* <Text style={styles.itemTxt}>{item.CO2}</Text> */}
              {/* <Text style={styles.subTxt}>2</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemInner}>
              <Text style={styles.itemTxt}>CO2: {item.CO2}</Text>
              {/* <Text style={styles.itemTxt}>{item.CO2}</Text> */}
              {/* <Text style={styles.subTxt}>2</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemInner}>
              <Text style={styles.itemTxt}>NH3: {item.NH3}</Text>
              {/* <Text style={styles.itemTxt}>{item.CO2}</Text> */}
              {/* <Text style={styles.subTxt}>2</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemInner}>
              <Text style={styles.itemTxt}>O2: {item.O2}</Text>
              {/* <Text style={styles.itemTxt}>{item.CO2}</Text> */}
              {/* <Text style={styles.subTxt}>2</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemInner}>
              <Text style={styles.itemTxt}>O2: {item.O2}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );

  render() {
    return (
      <View>
      <Header title="Pollution Monitoring" />
         <Text
          style={{
            fontFamily: 'UbuntuBold',
            fontSize: 23,
            color: '#fff',
            // marginBottom: 10,
            backgroundColor: Theme.themeColor
          }}>
          DASHBOARD
        </Text>
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={this.state.mylist}
          renderItem={this.renderHistory}
        />
      </View>
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
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop:5
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
    marginVertical:8
  },
  itemInner: {flexDirection: 'row', justifyContent: 'center'},
  itemTxt: {fontFamily: 'UbuntuMedium', color: 'black', lineHeight: 30},
  subTxt: {lineHeight: 37},
});
