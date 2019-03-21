import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CustomText extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }
render = () => {
    const { textStyles, buttonStyles, children } = this.props;
    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={textStyles}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
export default CustomText;