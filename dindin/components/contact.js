import * as React from 'react';
import{Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Constants } from 'expo';
import AssetExample from './components/AssetExample';

let data=require('..src/card.json');
for(i=0;i<data.size();i++){
  data[i].name;
  data[i].time;
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.circle} source={require('../assets/images/robot-dev.png')}/>
            <Image style={styles.phone} source={require('../assets/images/call.png')}/>
            <Image style={styles.mail} source={require('../assets/images/mail.jpg')}/>
            <View>
              <Text style={styles.name}>Wenjie</Text>
              <Text style={styles.time}>10:00 pm</Text>
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
    borderColor:'#FFF',
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
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