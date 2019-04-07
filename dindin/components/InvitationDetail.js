import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import { MapView } from 'expo';
export default class InvitationDetail extends React.Component {
    render() {
        return (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 38.0293059,
              longitude: -78.4766781,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        );
      }
    }
    