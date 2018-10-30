import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../config/styles';

export default ({width=30, height=30, selected=false}) => {
  let fillColor = '#E50027'
  if(selected){
   fillColor = color.primary;
   fillColor2 = color.primaryLight;
  }
 return (
  <View>
    <Svg height={height} width={width} viewBox="0 0 512 512">
      <Path fill={fillColor} d="M256,0C156.698,0,76,80.7,76,180c0,33.6,9.302,66.301,27.001,94.501l140.797,230.414
        c2.402,3.9,6.002,6.301,10.203,6.901c5.698,0.899,12.001-1.5,15.3-7.2l141.2-232.516C427.299,244.501,436,212.401,436,180
        C436,80.7,355.302,0,256,0z M256,270c-50.398,0-90-40.8-90-90c0-49.501,40.499-90,90-90s90,40.499,90,90
        C346,228.9,306.999,270,256,270z"/>
      <Path fill={fillColor} d="M256,0v90c49.501,0,90,40.499,90,90c0,48.9-39.001,90-90,90v241.991
        c5.119,0.119,10.383-2.335,13.3-7.375L410.5,272.1c16.799-27.599,25.5-59.699,25.5-92.1C436,80.7,355.302,0,256,0z"/>
    </Svg>
  </View>
)};