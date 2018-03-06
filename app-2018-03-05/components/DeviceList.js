import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import DeviceDetails from './DeviceDetails';

// Create a component
class DeviceList extends Component {
  state = { sensorData: [] };
  componentWillMount() {
    setInterval(() => {
    axios.get('http://184.145.47.229/Webpage/DatabaseReaderOLD.php')
      .then(response => {
        this.state.sensorData = response.data;
        for (let i = 1; i < 5; i++) {
          if (i == 1) {
            if (response.data[i].VALUE == 0) {
              this.state.sensorData[i].VALUE = 'lights are off';
            } else {
              this.state.sensorData[i].VALUE = 'lights are on';
            }
          }
          if( i == 2) {
            if (response.data[i].VALUE == 0) {
              this.state.sensorData[i].VALUE = ' no motion detected';
            } else {
              this.state.sensorData[i].VALUE = 'motion detected';
            }
          }
          if( i == 3) {
            if (response.data[i].VALUE == 0) {
              this.state.sensorData[i].VALUE = 'no waterleak detected';
            } else {
              this.state.sensorData[i].VALUE = 'waterleak detected';
            }
          }
          if ( i == 4) {
            if (response.data[i].VALUE == 0) {
              this.state.sensorData[i].VALUE = 'no smoke detected';
            } else {
              this.state.sensorData[i].VALUE = 'smoke detected';
            }
          }
        }
        this.setState(this.state.sensorData);
      });
      }, 1000);
    }
  renderSensors() {
    return this.state.sensorData.map(currentSensor =>
      <DeviceDetails key={currentSensor.ID} item={currentSensor} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSensors()}
      </ScrollView>
    );
  }
}

// make it public
export default DeviceList;
