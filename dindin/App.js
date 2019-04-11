import splash from './components/splash';
import contact from './components/contact';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Homescreen from "./components/Homescreen";
import Login from './components/Login';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { Constants } from 'expo';

const RootStack = createStackNavigator(
  {
    home: Homescreen,
    splash: splash,
    login: Login,
    home2:contact,
  }, {
    initialRouteName: 'splash'
  }
);

const AppContainer = createAppContainer(RootStack);
/*import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
var GobalSpace = {
  url: "https://catfact.ninja/fact"
}
export default class App extends React.Component {
  constructor(props){
   super(props);
   this.state ={ isLoading: true}
 }

 componentDidMount() {
   this.timerID = setInterval(() => {this.tick()}, 7000);
 }
 tick() {
   return fetch(GobalSpace.url).then(
     (response) => response.json()).then(
       response =>{
         this.setState({catFact: response, isLoading: false})
       }
   )
 }

 render(){
   if(this.state.isLoading){
     return(
       <Splash/>
     )
   }

   return(
     <View style={styles.centerAlign}>
       <Text style={styles.fact}> 
       {this.state.catFact.fact}
       </Text>
     </View>
   );
 }

}

const styles = StyleSheet.create({
  centerAlign:{
          flex: 1,
          alignContent:"center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#000D0C"

  },
  fact:{
    color: 'white',
    padding: 40,
    fontSize: 20,
  }
})*/ 

export default class App extends React.Component {

  render() {
    return (
      <AppContainer/>
    )
  }
}