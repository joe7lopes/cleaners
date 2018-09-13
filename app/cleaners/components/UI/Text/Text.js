import React from 'react';
import { Text } from 'react-native';

export default (props) => (
<Text style={[props.style]}>
  {props.children}
</Text>
)