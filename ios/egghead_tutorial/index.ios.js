/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main')

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} = React;

class egghead_tutorial extends React.Component {
  render() {
    return (
      <NavigatorIOS
        styles={styles.container}
        initialRoute={{
        title: '후미유',
        component: Main
      }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#111111'
  }
});

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   },
//   right: {
//     textAlign: 'right'
//   }
// });

AppRegistry.registerComponent('egghead_tutorial', () => egghead_tutorial);
