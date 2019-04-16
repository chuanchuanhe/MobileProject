import React, { Component } from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

//let data=require('..src/card.json');

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
            <Text style={styles.paragraph}>
              Location set as current location
            </Text>
          {
            this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
              <Text>Map region doesn't exist.</Text> :
                <MapView
                style={{ alignSelf: 'stretch', height: 400 }}
                region={this.state.mapRegion}
                onRegionChange={this._handleMapRegionChange}
                >
                <MapView.Marker
                  coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude
                  }}
                  description={"current location"} 
                  //pinColor='blue'
                  pinColor={'#42b3f4'}
                />

                </MapView>
          }

          <Text>
          Latitude: {this.state.latitude}
          </Text>
          <Text>
          Longitude: {this.state.longitude}
          </Text>
          {/* <Text>
          Mapdata: {this.state.locationResult}
          </Text>             */}
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

