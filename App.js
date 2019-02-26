import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>happy new year!!!</Text>
        <Image source = {pic} style={{ width:300, height:300 }}/>
      </View>
    );
  }
}
// AppRegistry.registerComponent('AwesomeProject', () ==> HelloWorldApp );
