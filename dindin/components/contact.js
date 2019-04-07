import * as React from 'react';
import{Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Constants } from 'expo';
import AssetExample from './components/AssetExample';

let data=require('..src/card.json');


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.date}>
            <Text>Tue 12 June</Text>
        </View>

        <View style={styles.card}>
            <Image style={styles.circle} source={require('../assets/images/robot-dev.png')}/>
            <Image style={styles.phone} source={require('../assets/images/call.png')}/>
            <Image style={styles.mail} source={require('../assets/images/mail.jpg')}/>
            <View>
              <Text style={styles.name}>{data[0].name}</Text>
              <Text style={styles.time}>{data[0].time}</Text>
            </View>
        </View>

        <View style={styles.date}>
            <Text>Wed 13 June</Text>
          </View>

          <View style={styles.card}>
            <Image style={styles.circle} source={require('../assets/images/robot-prod.png')}/>
            <Image style={styles.phone} source={require('call.png')}/>
            <Image style={styles.mail} source={require('mail.jpg')}/>
            <View>
              <Text style={styles.name}>{data[1].name}</Text>
              <Text style={styles.time}>{data[1].time}</Text>
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
   time: {
    position: 'absolute',
    left:70,
    top: -65,
    alignItems: 'flex-end',
  },
});
