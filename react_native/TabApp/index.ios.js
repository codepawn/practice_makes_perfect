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
  TabBarIOS
  } = React;

class TabApp extends React.Component {
  constructor() {
    super();
    this.state = {selectedTab: 'tabOne'}
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab One</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab Two</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab Three</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'tabFour'}
          onPress={() => this.setTab('tabFour')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab Four</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="most-viewed"
          selected={this.state.selectedTab === 'tabFive'}
          onPress={() => this.setTab('tabFive')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab Five</Text>
          </View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});

AppRegistry.registerComponent('TabApp', () => TabApp);
