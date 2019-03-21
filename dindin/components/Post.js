import React, {Component, PropTypes} from 'react';		 	
import {Image, 
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,} from 'react-native';

class Post extends Component {
    constructor(props) {
     super(props)
     }
    render() {
     return (
     <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
     <View style={styles.userInformations}>
     <Image source={{uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipnMCmpcvgAhWFmeAKHd2hD3YQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fcat-hacker-webs-o0vwzuFwCGAFO&psig=AOvVaw3933TaqHyrD1_qQg6bvfzc&ust=1550785753512807'}} /> 
     <Text>this.props.post.userName</Text>
     </View>
     <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
     )
     }
    onLoadEnd() {
        this.setState({ isLoaded: true });
    }
    onError() {
        this.setState({ isError: true });
    }
    }
    export default Post