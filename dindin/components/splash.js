import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image, TouchableOpacity, Animated,} from 'react-native'; 
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {I18n} from '../src/i18n/I18n';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);



export default class splash extends React.Component {
  isMounted = false;

  constructor(props) {
    super(props)
    this.state = {
      avatar1: new Animated.Value(0),
      avatar2: new Animated.Value(0),
      avatar3:  new Animated.Value(0), 
    }
  }

  fadeIn1(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 2000,       // 2000ms
      }
    ).start(()=>this.fadeOut1(anim));              
  }

  fadeOut1(anim) {
    if (this.isMounted) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
      }
    ).start(()=>this.fadeIn2(this.state.avatar2));  
  }

  fadeIn2(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
      }
    ).start(()=>this.fadeOut2(anim));
  }

  fadeOut2(anim) {
    if (this.isMounted) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
      }
    ).start(()=>this.fadeIn3(this.state.avatar3));  
  }

  fadeIn3(anim) {
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
      }
    ).start(()=>this.fadeOut3(anim));
  }

  fadeOut3(anim) {
    if (this.isMounted) {
      this.setState({anim: new Animated.Value(1)})
    }
    Animated.timing(          // Animate over time
      anim,    // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
      }
    ).start();  //startthe animation
  }

  componentWillMount() {
    this.fadeIn1(this.state.avatar1);
  }

  componentDidMount() {
    this.isMounted = true;
    this.timerId = setInterval(()=>this.fadeIn1(this.state.avatar1), 6000);
  }

  componentWillUnmount() {
    this.isMounted = false; 
  }

  render() {
    let { avatar1 } = this.state;
    let { avatar2 } = this.state;
    let { avatar3 } = this.state;
    return (
    <View style={styles.container}>
        <View style={styles.images}>
        <Image style={styles.OvalBackground} source={require('../assets/images/Ovals.png')}/>
        <Animated.Image style={[styles.people1, {opacity:avatar1}]} source={require('../assets/images/Page1.png')}/>
        <Animated.Image style={[styles.people2, {opacity:avatar2}]} source={require('../assets/images/Page2.png')}/>
        <Animated.Image style={[styles.people3, {opacity:avatar3}]} source={require('../assets/images/Page3.png')}/>
        </View>
        <View style={styles.title}>
          <Text style={styles.dindin}>{I18n.t('DinDin')} </Text>
          <Text style={styles.subtitle}>{I18n.t('connecting')}</Text>
      </View>
      <View style={styles.start}>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
          <Image style={styles.buttonBar} source={require('../assets/images/getStarted.png')}/>

          
        {/*</TouchableOpacity>  */}
        <TouchableOpacity 
        style={styles.button}
        onPress={() => this.props.navigation.navigate('login')}>
        {/*<Text> Get Started </Text> */}
        <Text style ={styles.buttonText}> {I18n.t('Get_Started')} </Text>
      </TouchableOpacity> 
      </View>
    </View> 
    ) 
  }
}
//<View style={styles.textView}><Text style={styles.buttonText}>{I18n.t('Get_Started')} </Text></View>
  var windowWidth = Dimensions.get('window').width;
  var windowHeight = Dimensions.get('window').height; 

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },

    images: {
      top:90,
      alignItems: 'center',
      justifyContent: 'center',
    },

    OvalBackground: {
      width: 259,
      height: 259,
    },
    button:{
    backgroundColor: 'skyblue',
    width:windowWidth,
    height:50,

    },
    title: {
      //textAlign: 'center', 
      //fontWeight: 'bold',
      //fontSize: 23,
      //marginTop: 5,
      //width: 200,
      //fontFamily: 'Helvetica',
      bottom:60
    },

    dindin:{
      fontFamily: 'System',
      fontSize:29,
      textAlign: 'center'
    },

    subtitle:{
      //color: 'grey',
      fontFamily: 'System',
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontSize: 15,
      height:100,
      alignItems: 'center',
      marginTop: 5,
      paddingTop: 8
    },

    start: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 0,
      height: 0.076*windowHeight,
    },
    textView:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    buttonBar: {
      width: windowWidth,
      height: 0.076*windowHeight,
    },
    buttonText: {
      fontFamily: 'System',
      fontSize:20,
      top:10,
      justifyContent:'center',
      textAlign:'center',
    },

    people1:{
      width:54,
      height:57.18,
      left:60,
      bottom:60
    },

    people2: {
      width:67,
      height: 72,
      left:60, 
      bottom: 300,
    },

    people3:{
      width:73,
      height:80,
      right:90,
      bottom:300,
    },
  })
