import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, TouchableOpacity, AppRegistry, TextInput, KeyboardAvoidingView } from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 'Java',
      minute: '00',
      timeOfDay: 'PM',
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      address: "",
    }
  }

//   componentDidMount() {
//     this._getLocationAsync();
//   }

//   _handleMapRegionChange = mapRegion => {
//     console.log(mapRegion);
//     this.setState({ mapRegion });
//   };

//   _getLocationAsync = async () => {
//    let { status } = await Permissions.askAsync(Permissions.LOCATION);
//    if (status !== 'granted') {
//      this.setState({
//        locationResult: 'Permission to access location was denied',
//      });
//    } else {
//      this.setState({ hasLocationPermissions: true });
//    }

//    let location = await Location.getCurrentPositionAsync({});
//    this.setState({ locationResult: JSON.stringify(location) });
   
//    // Center the map on the location we just fetched.
//     this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
//     };
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style = {styles.container} >
            <Text style={styles.paragraph}>
                Set a time for your event!
            </Text>
            <View style={styles.timeContainer} >
                <Picker
                style={{width: 100, height: 50}}
                selectedValue={this.state.hour}
                onValueChange={(h) => this.setState({hour: h})}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                </Picker>

                <Picker
                style={{width: 100, height: 50}}
                selectedValue={this.state.minute}
                onValueChange={(m) => this.setState({minute: m})}>
                <Picker.Item label="00" value="00" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="31" value="31" />
                <Picker.Item label="32" value="32" />
                <Picker.Item label="33" value="33" />
                <Picker.Item label="34" value="34" />
                <Picker.Item label="35" value="35" />
                <Picker.Item label="36" value="36" />
                <Picker.Item label="37" value="37" />
                <Picker.Item label="38" value="38" />
                <Picker.Item label="39" value="39" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="41" value="41" />
                <Picker.Item label="42" value="42" />
                <Picker.Item label="43" value="43" />
                <Picker.Item label="44" value="44" />
                <Picker.Item label="45" value="45" />
                <Picker.Item label="46" value="46" />
                <Picker.Item label="47" value="47" />
                <Picker.Item label="48" value="48" />
                <Picker.Item label="49" value="49" />
                <Picker.Item label="50" value="50" />
                <Picker.Item label="51" value="51" />
                <Picker.Item label="52" value="52" />
                <Picker.Item label="53" value="53" />
                <Picker.Item label="54" value="54" />
                <Picker.Item label="55" value="55" />
                <Picker.Item label="56" value="56" />
                <Picker.Item label="57" value="57" />
                <Picker.Item label="58" value="58" />
                <Picker.Item label="59" value="59" />
                </Picker>

                <Picker
                style={{width: 100, height: 50}}
                selectedValue={this.state.timeOfDay}
                onValueChange={(time) => this.setState({timeOfDay: time})}>
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="PM" value="PM" />
                </Picker>
            </View>

            <View style={styles.mapContainer}>

                <Text style={styles.paragraph}>
                Enter an address or use your current location!
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        multiline = {true}
                        numberOfLines = {4}
                        onChangeText={(address) => this.setState({address})}
                        value={this.state.address}
                        editable = {true}
                        maxLength = {100}
                        // autoComplete = {street-address}
                    />
                </View>
                

                <View style={styles.locationButtonContainer}>
                <TouchableOpacity 
                    style={styles.locationButton}
                    onPress={() => this.props.navigation.navigate('newEventSetLocation')}>
                    <Text> Enter </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.locationButton}
                    onPress={() => this.props.navigation.navigate('newEventLocation')}>
                    <Text> Use current location </Text>
                </TouchableOpacity>
                </View>

                <MapView
                        style={{ alignSelf: 'stretch', height: 200 }}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                />
                
                {
                //this.state.locationResult === null ?
                //<Text>Finding your current location...</Text> :
                //this.state.hasLocationPermissions === false ?
                //  <Text>Location permissions are not granted.</Text> :
                //  this.state.mapRegion === null ?
                //  <Text>Map region doesn't exist.</Text> :
                    // <MapView
                    //   style={{ alignSelf: 'stretch', height: 400 }}
                    //   region={this.state.mapRegion}
                    //   onRegionChange={this._handleMapRegionChange}
                    // />
                }
                
                {/* <Text>
                Location: {this.state.locationResult}
                </Text> */}
            </View>
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button:{
    width: 150,
    height: 40,
    top:10,
    left:60,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10, 
    borderRadius:50, 
  },
  locationButton:{
    width: 150,
    height: 40,
    top:10,
    left:30,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10, 
    borderRadius:50, 
  },
  locationButtonContainer: {
    //flex: 1,
    paddingBottom: 15, 
    borderRadius:50, 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
  },
  mapContainer: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70
  },
  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  },
});
