/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

import { SensorManager } from 'NativeModules';


export default class SensorTest extends Component {
  
  state = {
    x: 0,
    y: 0,
    z: 0
  }

  componentDidMount() {
    SensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
    DeviceEventEmitter.addListener('Accelerometer', (data) => {
      /**
      * data.x
      * data.y
      * data.z
      **/
      this.setState({x:data.x, y:data.y, z:data.z})
    });
    //SensorManager.stopAccelerometer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Accelerometer</Text>
        <Text>X : {this.state.x}</Text>
        <Text>Y : {this.state.y}</Text>
        <Text>Z : {this.state.z}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SensorTest', () => SensorTest);
