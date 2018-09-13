import React from 'react';
import { TouchableOpacity } from 'react-native';

export default SemiRounded = ({style, children}) => (
  <TouchableOpacity style={[style,{borderRadius: 40}]}>
      {children}
  </TouchableOpacity>
)
