import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native'; 
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {I18n} from '../src/i18n/I18n';

export default class splash extends React.Component {
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
      {/* <Text style={styles.title}>DinDin </Text>
      <Text style={styles.subtitle}>connecting food lovers</Text> */}
      <Text style={styles.title}>{I18n.t('DinDin')} </Text>
      <Text style={styles.subtitle}>{I18n.t('connecting')}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Login')}>
        {/*<Text> Get Started </Text> */}
        <Text> {I18n.t('Get_Started')} </Text>
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
/** 
export default class splash extends React.Component {
  isMounted = false;

  constructor(props) {
    super(props)
    this.state = {
      avatar1 = new Animated.Value(0),
      avatar2 = new Animated.Value(0),
      avatar3 = new Animated.Value(0)
    }
  }

  fadeIn1(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start(()=>this.fadeOut1(anim));              
  }

  fadeOut1(anim) {
    if (this.isMounted == true) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start(()=>this.fadeIn2(this.state.avatar2));  
  }

  fadeIn2(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start(()=>this.fadeOut2(anim));
  }

  fadeOut1(anim) {
    if (this.isMounted == true) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start(()=>this.fadeIn2(this.state.avatar3));  
  }

  fadeIn3(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start(()=>this.fadeOut3(anim));
  }

  fadeOut3(anim) {
    if (this.isMounted == true) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1200,       // 2000ms
      }
    ).start();  
  }

  componentWillMount() {
    this.fadeIn1(this.state.avatar1)
  }

  componentDidMount() {
    this.isMounted = true
    this.timerId = setInterval(()=>this.fadeIn1(this.state.avatar1))
  }

  componentWillMount() {
    this.isMounted = false
  }

  render() {
    let {avatar1} = this.state;
    let {}
  }
    return (

    )
}

**/