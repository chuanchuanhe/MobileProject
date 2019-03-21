import React, {Component, PropTypes} from 'react';		 	
import {Image, 
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,} from 'react-native';

    export default class InviteCard extends Component {
        render () {
            let {onPress, isRipple, rippleColor, children, style} = this.props;
            return (
                <View>
                    <TouchableNativeFeedback
                        onPress={onPress}
                        background={isRipple ? TouchableNativeFeedback.Ripple(rippleColor || "#000000") : null}>
                        <View style={style}>
                            {children}
                        </View>
                    </TouchableNativeFeedback>
                </View>
            )
        }
    }