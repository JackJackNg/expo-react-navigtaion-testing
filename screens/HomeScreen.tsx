import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Layout from '../constants/Layout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, this support typescript :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: Layout.window.width,
    height: Layout.window.height,
  },
  text: {
    textAlign: 'center',
  },
});
