import React, {useState} from 'react';
import {View, Text, StyleSheet,StatusBar,SafeAreaView,  Dimensions, TouchableOpacity} from 'react-native';
import Theme from '../../styles/Theme';
import Header from '../../components/header';

const {width, height} = Dimensions.get('window');

export default function Dashboard() {

  return(
      <SafeAreaView style={styles.pageContainer}>
        <StatusBar barStyle="dark-content" />
        <Header title="Pollution Monitoring" />
        <View style={[styles.container,{marginHorizontal: width*0.15}]}>
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 23, color: '#fff', marginBottom: 10}}>DASHBOARD</Text>
            <View style={styles.itemRow}>
                <TouchableOpacity style={styles.itemContainer}>
                    <View style={styles.itemInner}>
                      <Text style={styles.itemTxt}>SO</Text>
                      <Text style={styles.subTxt}>2</Text>
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
                      <Text style={{color:'black', fontFamily: 'UbuntuMedium'}}>PM{"\n"}2.5</Text>
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
                    <Text style={{color:'black', fontFamily: 'UbuntuMedium'}}>Wind{"\n"}Speed</Text>
                  </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{marginTop:10,backgroundColor: '#fff', elevation: 3, width: '60%', alignItems: 'center'}}>
              <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontFamily: 'UbuntuMedium'}}>EXPOSURE</Text>
            </TouchableOpacity>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    backgroundColor: Theme.themeColor,

  },
  container: {
    flex:1,
    // backgroundColor: Theme.themeColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemRow: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5,
  },
  itemContainer: {
    width: height*0.15, height: height*0.12,
    backgroundColor: '#fff', borderRadius: 10,
    flexDirection: 'row',justifyContent: 'center',alignItems: 'center',
    marginHorizontal: 2
  },
  itemInner: {flexDirection: 'row', justifyContent: 'center'},
  itemTxt:{fontFamily: 'UbuntuMedium', color: 'black', lineHeight: 30},
  subTxt:{lineHeight: 37}
});
