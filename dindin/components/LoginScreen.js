import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {I18n} from '../src/i18n/I18n';
import { Constants, Facebook } from 'expo';
import MainScreen from './MainScreen';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleFacebookLogin(navigation) {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '2282859118415869', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );
      console.log(type + " "+ token)

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          console.log("Was Successful")
          navigation.navigate('main', { profile });
          break;
        }
        case 'cancel': {
          Alert.alert('Whoops!', 'You need a facebook to access DinDin:)');

          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      console.log('Something unexpected happened');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.fbImageStyle} source={require('../assets/images/facebook-icon.png')} />
        <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        this.handleFacebookLogin(this.props.navigation)
        }
        >
        <Text> {I18n.t('Login')} </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'column',
    //paddingTop: Constants.statusBarHeight,
  },
  fbImageStyle: {
    //flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10, 
  },
  buttonPress: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10, 
  }
});
