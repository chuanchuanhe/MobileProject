import * as React from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { Constants } from 'expo';
import { MapView } from 'expo';

//let data=require('..src/card.json');


export default class detail extends React.Component {
  render() {
    return (
    //   <MapView
    //   style={{ flex: 1 }}
    //   initialRegion={{
    //     latitude: 38.0293059,
    //     longitude: -78.4766781,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    // />
        <View style={styles.container}>
          <View style={{width: 300,height: 240,padding: 30,borderWidth:1,top:0,position:'absolute'}}>   
           
           <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={{top:0,left:100,justifyContent: 'center',alignItems: 'center',width: 60, height:60,borderRadius:30 }} 
                source={require('../assets/images/toto.png')}/>
            <View>
              <Text style={{textAlign: 'center',paddingTop:5,fontSize:18,fontWeight:'bold'}}>Doma Restaurant</Text>
              <Text style={{textAlign: 'center'}}>Sun 17 June - 8:00pm</Text>
              <Text style={{textAlign: 'center',paddingTop:10,color:'gray'}}>Host by Alma Evans</Text>
            </View>
           </TouchableOpacity>
           
            <View style={{position: "absolute", bottom: 0, right: 0,borderWidth:1,height:50,width:150}}>
             <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{textAlign: 'center',fontSize:20, marginTop: 10,color:'red'}}>Decline</Text>
            </TouchableOpacity>
            </View>

            <View style={{position: "absolute", bottom: 0, left: 0,borderWidth:1,height:50,width:150}}>
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Login')}>
               <Text style={{textAlign: 'center',color:'green',fontSize:20, marginTop: 10}}>Accept</Text>
              </TouchableOpacity>
            </View> 
        </View> 
    
              
       
        <MapView style={{position: "absolute", bottom: 0,width:350,height:350}}
            initialRegion={{
                latitude: 38.0293059,
                longitude: -78.4766781,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
        }}>

        <MapView.Marker
            coordinate={{latitude:38.0316,longitude: -78.4897}}
            description={"dinner"} />

            </MapView>
        


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
});

