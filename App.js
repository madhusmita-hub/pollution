import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Theme from './src/styles/Theme';
import DrawerComponent from './src/components/drawer';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import About from './src/screens/About';
import Home from './src/screens/Dashboard';
import Home2 from './src/screens/Dashboard/index2';
import VisualAQI from './src/screens/Dashboard/visualAQI';
import Detailscsreeen from './src/screens/Dashboard/dataDetails';

import Data2 from './src/screens/Dashboard/index2'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import FirebaseComp from './src/components/firebase';
import RealTimeDB from './src/screens/realtimeDB';


function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home2}/>
      <Drawer.Screen name="VisualAQI" component={VisualAQI}/>
      <Drawer.Screen name="About" component={About} />

    </Drawer.Navigator>
  )
};


const App = () => {
  return (
    <>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerStyle: { backgroundColor: Theme.themeColor}, headerTitleStyle: { color:'#fff', fontFamily:'UbuntuMedium', fontSize:22} }}>
              <Stack.Screen name="Splash" component={Splash} options={{ headerMode:"none",headerShown:false }}/>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Pollution Monitoring' }}/>

              <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Pollution Monitoring' }} options={{ headerMode:"none",headerShown:false }}/>
              {/* <Stack.Screen name="Dashboard2" component={Data2} options={{ title: 'Pollution Monitoring' }} options={{ headerMode:"none",headerShown:false }}/> */}
              <Stack.Screen name="DataDetails" component={Detailscsreeen} options={{ title: 'Pollution Monitoring' }} options={{ headerMode:"none",headerShown:false }}/>
            {/*<Stack.Screen name="Settings" component={Settings} />*/}
            {/* <Stack.Screen name="Realtime" component={RealTimeDB} /> */}
            </Stack.Navigator>
      </NavigationContainer>
    </>
    // <Data2/>
  );
};


export default App;
