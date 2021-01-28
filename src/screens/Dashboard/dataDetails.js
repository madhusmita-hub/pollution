import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DataDetails extends Component {
    componentDidMount(){
        const myData= this.props.route.params.data
        alert(JSON.stringify(myData))
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> dataDetails </Text>
      </View>
    );
  }
}

export default DataDetails;
