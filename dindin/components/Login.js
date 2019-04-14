import * as React from 'react';
import {auth} from 'firebase';
import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Constants, LinearGradient, Image } from 'expo';
import * as firebase from 'firebase'; 
//import {I18n} from '../src/i18n/I18n';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
      }

    async loginwithFacebook(){

        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
            '2282859118415869', 
            {permission: ['public_profile']}
        );
        
        switch (type) {
            case 'success': {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`
              );
              const profile = await response.json();
              console.log("Was Successful")
              this.props.navigation.navigate('home2', { profile });
              const credential = auth.FacebookAuthProvider.credential(token)
              firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                  console.log(error) })
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
    
    render() {
      return (
          <Button style= {{margin: 10}}
            full
            rounded
            success
            onPress={() => this.loginwithFacebook()}
            title= 'Login with Facebook'
            //title= {I18n.t('Login')} 
          >
          </Button>
      ) 
    }
}
