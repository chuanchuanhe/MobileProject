import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Great you logged in
        </Text>
<<<<<<< HEAD
        <Image style={styles.logo} source={require('../assets/images/icon.png')} />
=======
        <Image style={styles.logo} source={require('../assets/images/check-mark.png')} />
>>>>>>> loginFB
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
