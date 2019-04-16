import React, { Component } from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

//let data=require('..src/card.json');

const pinColor = '#000000';

export default class detail extends React.Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    latitude: 39.0317,
    longitude: -78.50268,
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    this.setState({latitude: location.coords.latitude})
    this.setState({longitude: location.coords.longitude})
};
    
  render() {
    return (
        <View style={styles.container}>
          <View style={{width: 300,height: 240,padding: 30,borderWidth:1,top:0,position:'absolute'}}>   
           

            <Image style={{top:0,left:100,justifyContent: 'center',alignItems: 'center',width: 60, height:60,borderRadius:30 }} 
                source={require('../assets/images/toto.png')}/>
            <View>
              <Text style={{textAlign: 'center',paddingTop:5,fontSize:18,fontWeight:'bold'}}>Doma Restaurant</Text>
              <Text style={{textAlign: 'center'}}>Sun 17 June - 8:00pm</Text>
              <Text style={{textAlign: 'center',paddingTop:10,color:'gray'}}>Host by Alma Evans</Text>
            </View>
           
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
    
          {
            this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
              <Text>Map region doesn't exist.</Text> :
              <MapView 
                style={{position: "absolute", bottom: 0,width:350,height:350}}
                initialRegion={{
                  latitude: 38.0293059,
                  longitude: -78.4766781,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
              <MapView.Marker
                coordinate={{latitude:38.0316,longitude: -78.4897}}
                description={"dinner"} 
                //pinColor='#000000'
                />
                <MapView.Marker
                  coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude
                  }}
                  description={"current location"} 
                  //pinColor='blue'
                  pinColor={'#000000'}
                />

                </MapView>
          }

          {/* <Text>
          Latitude: {this.state.latitude}
          Longitude: {this.state.longitude}
          </Text>       */}
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

