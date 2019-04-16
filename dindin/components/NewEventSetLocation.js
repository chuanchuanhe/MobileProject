import React, { Component } from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity, StatusBar} from 'react-native';

export default class detail extends React.Component {
  state = {
  };
    
  render() {
    return (
        <View style={styles.container}>    
            <Text style={styles.paragraph}>
              Location set as event location!
            </Text>
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

