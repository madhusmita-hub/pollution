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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import About from './src/screens/About';

import Home from './src/screens/Dashboard';
import VisualAQI from './src/screens/Dashboard/visualAQI';

// import Home from './src/screens/Home';


function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="VisualAQI" component={VisualAQI}/>
      <Drawer.Screen name="About" component={About} />

    </Drawer.Navigator>
  )
};


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerStyle: { backgroundColor: Theme.themeColor}, headerTitleStyle: { color:'#fff', fontFamily:'UbuntuMedium', fontSize:22} }}>
              <Stack.Screen name="Splash" component={Splash} options={{ headerMode:"none",headerShown:false }}/>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Pollution Monitoring' }}/>

              <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Pollution Monitoring' }} options={{ headerMode:"none",headerShown:false }}/>
            {/*<Stack.Screen name="Settings" component={Settings} />*/}
            </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
