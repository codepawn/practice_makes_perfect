/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var egghead_tutorial = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 후미유!
        </Text>
        <Text style={styles.instructions}>
          사랑하는 후미와 헴이
        </Text>
        <Text style={styles.instructions}>
          사랑하는 남자친구 미르,
          e
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('egghead_tutorial', () => egghead_tutorial);
