import {View, Text} from 'react-native';
import React, {Component, useEffect} from 'react';
import database from '@react-native-firebase/database';
import * as firebase from 'firebase';
// import {firebaseConfig} from '../../config';
// import firebaseConfig from '../../config';


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

// const App = () => {

//   const [Name, setName] = React.useState('');
//   const [Position, setPosition] = React.useState('');
//   const [users, setUsers] = React.useState([]);

//   useEffect(() => {
//    const myUsers = firebase.database().ref("/users");
//   //  console.log(myUsers)
//   //  alert((myUsers))
  
//    myUsers.once("value", snapshot =>{
//      console.log("data", snapshot.val())
//    })
//   });


 

//   return(
//       <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
//           <Text>Hello</Text>
//       </View>
//   )
// }
// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CH4:"",
      CO2:"",
      text:"",
      mylist:[],
      studentslist:{}
    };
  }

  componentDidMount() {
    const myItems = firebase.database().ref('/users')
    myItems.on("value", datasnap=>{
      // console.log((datasnap.val()))
      console.log(Object.values(datasnap.val()))
      // alert(JSON.stringify(datasnap))
      this.setState({mylist: Object.values(datasnap.val())})
    })
      
  }

  render() {
    // alert(JSON.stringify(this.state.studentslist))
    console.log(this.state)
    const myItems = this.state.mylist.map((item,index)=>{
      return(
        <View>
          <Text>CH4:{item.CH4}</Text>
          <Text>CO2:{item.CO2}</Text>
          <Text>NH3:{item.NH3}</Text>
          <Text>Windspeed:{item.Windspeed}</Text>
        </View>
      )
    })
    return (
      <View>
        {/* {this.state.studentlist.map(item,index(<Text>{item.CH4}</Text>))} */}
        {/* {studentslist.map((item, index) => (<Text></Text>))} */}
        <Text>{myItems}</Text>
      </View>
    );
  }
}
export default App;
