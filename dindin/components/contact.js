import * as React from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { Constants } from 'expo';

//let data=require('..src/card.json');


export default class contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.date}>
            <Text>Tue 12 June</Text>
        </View>

        <View style={styles.card}>
            <Image style={styles.circle} source={require('../assets/images/robot-dev.png')}/>
            <Image style={styles.phone} source={require('../assets/images/call.png')}/>
            <Image style={styles.mail} source={require('../assets/images/mail.png')}/>
            <View>
              <Text style={styles.name}>George </Text>
              <Text style={styles.time}>10:00 pm</Text>
            </View>
        </View>

        <View style={styles.date}>
            <Text>Wed 13 June</Text>
          </View>

          <View style = {styles.card}>
              <TouchableOpacity 
               style={styles.button}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text> Add New Event </Text>
            </TouchableOpacity> 
          </View>

          <View style={styles.date}>
            <Text>Thu 14 June</Text>
          </View>

          <View style={styles.card}>
            <Image style={styles.circle} source={require('../assets/images/robot-prod.png')}/>
            <Image style={styles.phone} source={require('../assets/images/call.png')}/>
            <Image style={styles.mail} source={require('../assets/images/mail.png')}/>
            <View>
              <Text style={styles.name}>Mark</Text>
              <Text style={styles.time}>3:00 pm</Text>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red',
  },
  date:{
    width:300,
    height:40,
    padding:10,
    borderWidth:1,
    
  },
  card: {
    //borderStyle:'solid',
    //borderWidth: 3,
    //borderRadius: 3,
    width: 300,
    height: 100,
    padding: 10
  },
  phone:{
    top:-20,
    left:200,
    width:30,
    height:30,
  },
  mail:{
    top:-50,
    left:240,
    width:30,
    height:30,
  },
  circle:{
    alignItems:'center',
    justifyContent:'center',
    top:15,
    left:10,
    width: 45,
    height:45,
    borderColor:'green',
    borderStyle:'solid',
    borderRadius:20, 
    },
  name: {
    position: 'absolute',
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center',
    left:70,
    top:-85,
  },
  button:{
    width: 150,
    height: 40,
    top:20,
    left:60,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10, 
    borderRadius:50, 
  },
   time: {
    position: 'absolute',
    left:70,
    top: -65,
    alignItems: 'flex-end',
  },
});
