/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('./logoWhite.png')} />
          <Text style={styles.text}>TASK REMINDER</Text>
          <Text style={styles.welcome}>WELCOME</Text>
        </View>

        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.text}> SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.text}> SIGN OUT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.text}> NEVERMIND </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 300,
    height: 100
  },
  formContainer: {
    flex: 1,
  },
  welcome: {
    padding: 10,
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'lightblue',
    height: 80,
    margin: 10,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'grey',
  },
});