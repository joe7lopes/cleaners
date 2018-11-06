import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {color} from '../../config/styles';

export default ({selected=false, width=30, height=30}) => {
  let fillColor = selected ? color.primary : 'black';
 return (
  <View>
    <Svg height={height} width={width} viewBox="0 0 52 52">
			<Path fill={fillColor} d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
				c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
				C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
				S32.459,40,21.983,40z"/>
    </Svg>
  </View>
)};
