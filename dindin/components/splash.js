import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native'; 

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  }
  
  componentDidMount() {
    Animated.timing(          // Animate over time
      this.state.fadeAnim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1500,       // 2000ms
      }
    ).start();                // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;
    return (
    <View style={styles.container}>
      <Animated.View View style={{ ...this.props.style, opacity: fadeAnim }}>
        {this.props.children}
        <Image style={styles.avatarStyle} source={require('../assets/images/avatar.png')} />
      </Animated.View>
      <Text style={styles.title}>DinDin </Text>
      <Text style={styles.subtitle}>connecting food lovers</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => this.props.navigation.navigate('home')}>
        <Text> Get Started </Text>
      </TouchableOpacity> 
    </View> 
    ) 
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 50,
    },
    title: {
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: 23,
      marginTop: 5,
      width: 200,
      fontFamily: 'Helvetica',
    },
    subtitle:{
      color: 'grey',
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontSize: 15,
      height:100,
      alignItems: 'center',
      marginTop: 5,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'skyblue',
      padding: 10, 
    }
  })