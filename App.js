import React, { Component } from 'react';
import { Text } from 'react-native';
import { AppRegistry, View, Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>Denis Enrico Hasyim</Text>
        <Image
          style={{width: 100, height: 100}}
          source={require('./img/favicon.png')}
        />
        <Text style={{fontWeight: 'bold'}}>Batch 5 Genovese</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

