/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./app/SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
  } = React;

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>Hello World (Again)</Text>

    )
  }
}

class egghead_tuto2 extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('egghead_tuto2', () => egghead_tuto2);
