import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

class DataDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CH4: '',
      CO2: '',
      NH3: '',
      O2: '',
      PM2_5: '',
      SO2: '',
      Windspeed: '',
    };
  }

  componentDidMount = () => {
    const myData = this.props.route.params.data;
    alert(JSON.stringify(myData));
    this.setState({
      CH4: myData.CH4,
      CO2: myData.CO2,
      NH3: myData.NH3,
      O2: myData.O2,
      PM2_5: myData.PM2_5,
      SO2: myData.SO2,
      Windspeed: myData.Windspeed,
    });
  };

  render() {
    // alert(JSON.stringify(this.state.CH4))
    return (
      <View style={{flex: 1}}>
        <View style={styles.card}></View>
        <Text>CH4: {this.state.CH4}</Text>
        <Text>CO2: {this.state.CO2}</Text>
        <Text>NH3: {this.state.NH3}</Text>
        <Text>O2: {this.state.O2}</Text>
        <Text>PM2: {this.state.PM2_5}</Text>
        <Text>SO2: {this.state.SO2}</Text>
        <Text>WindSpeed: {this.state.Windspeed}</Text>
      </View>
    );
  }
}

export default DataDetails;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '15%',
    backgroundColor: Theme.themeColor,
    height: 100,

  },
});
