import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import Geocoder from 'react-native-geocoding';

export default class App extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    latitude: null,
    longitude: null,
    address: null,
  };

  componentWillMount() {
    this._getLocationAsync();
  }
  componentDidMount () {
    Geocoder.setApiKey('AIzaSyAJId6vHhpa4SD8hkGyVW7AS0g_6EOHGLM'); 
    Geocoder.from("University of Virginia Rice Hall").then(
      json => {
        var addressComponent = json.results[0].formatted_address;
        this.setState({address: addressComponent });
      },
      error => {
        alet(error);
      }
    );
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
    this.setState({latitude : location.coords.latitude})
    this.setState({longitude : location.coords.longitude})
};



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pan, zoom, and tap on the map!
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
            />
        }
        
        <Text>
          Latitude: {this.state.latitude}
          Longitude: {this.state.longitude}
        </Text>
        
        <Text>
          Address: {this.state.address}
        </Text>
      </View>
        
    );
  }
}
 
//     // Coordinates to center the map
//     var myLatlng = new google.maps.LatLng(-23.0078349,-43.3149783);

//     // Other options for the map, pretty much selfexplanatory
//     var mapOptions = {
//         zoom: 14,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
 
//     // Attach a map to the DOM Element, with the defined settings
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//     fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBxOdxMzUrHxdK9ooxbs4VuJGyFb7P3dag&address=' + -23.0078349 + ',' + -43.3149783)
//         .then((response) => response.json())
//         .then((responseJson) => {
//             document.getElementById('tx').value=JSON.stringify(responseJson);
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
