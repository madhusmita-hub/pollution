// import * as React from 'react';
// import firebase from '@react-native-firebase/app';
import * as firebase from 'firebase';

// import database from '@react-native-firebase/database';
// import Appc from './App';

// export const firebaseConfig = {
//   apiKey: "AIzaSyCgVSPU6AxK3sJibRjCBh2Qo5bjxXJ8GWI",
//   authDomain: "polutionrn2.firebaseapp.com",
//   projectId: "polutionrn2",
//   storageBucket: "polutionrn2.appspot.com",
//   messagingSenderId: "237257349836",
//   appId: "1:237257349836:web:26b28c0e9ef3dd6b768069",
//   measurementId: "G-JF6W1485E4"
// };

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
  // export{firebase,database};

  // function Setup(){
  //   return <Appc/>;
  // }
  // export default Setup;