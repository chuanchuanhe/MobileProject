import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, Facebook } from 'expo';
import MainScreen from './MainScreen';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleFacebookLogin(navigation) {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
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
          navigation.navigate('Main', { profile });

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
        <Button
          title="Login with Facebook"
          onPress={() => this.handleFacebookLogin(this.props.navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
});
