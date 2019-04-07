import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Constants, LinearGradient, Image } from 'expo';

export default class Homescreen extends React.Component {
    render() {
      return (
        <ScrollView style={styles.container}>
          <ScrollView horizontal>
            <View style={styles.boxSmall}>
            <Text>January</Text>
            </View>
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
          </ScrollView>
          <View style={styles.boxLarge} />
          <View style={styles.boxLarge} />
          <View style={styles.boxLarge} />
          <View style={styles.container}>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('InvitationDetail')}>
              <Text> Get Started </Text>
            </TouchableOpacity> 
        </View>
      </ScrollView>
      ) 
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    boxSmall: {
      width: 200,
      height: 200,
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: 'skyblue',
    },
    boxLarge: {
      width: 300,
      height: 300,
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: 'steelblue',
    },
  })
