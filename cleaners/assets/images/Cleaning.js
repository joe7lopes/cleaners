import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Rect} from 'react-native-svg';

export default ({color='black', width=30, height=30}) => {
 return (
  <View>
    <Svg height={height} width={width} viewBox="0 0 512 512">
      <G>
        <Path fill={color} d="M416,336h-12.528c-8.786,0.008-17.45,2.053-25.312,5.976c-11.439,5.686-24.881,5.686-36.32,0
          c-4.563-2.239-9.406-3.854-14.4-4.8L343.032,216H360c4.418,0,8-3.582,8-8v-32c0-4.418-3.582-8-8-8h-32v-24
          c0-2.122-0.844-4.156-2.344-5.656L288,100.688V75.84l12.128-9.696l20.712,41.432l14.32-7.152L312.904,55.92L322.8,48H352
          c4.418,0,8-3.582,8-8V8c0-4.418-3.582-8-8-8h-80c-39.744,0.048-71.952,32.256-72,72c0,4.418,3.582,8,8,8h16v20.688l-21.656,21.656
          c-1.5,1.5-2.344,3.534-2.344,5.656v40h-16v-64c-0.012-0.991-0.21-1.97-0.584-2.888c-0.146-0.311-0.312-0.613-0.496-0.904
          c-0.192-0.419-0.417-0.823-0.672-1.208L152,61.2V8c0-4.418-3.582-8-8-8H96c-4.418,0-8,3.582-8,8v53.2L57.752,99
          c-0.255,0.385-0.48,0.789-0.672,1.208c-0.184,0.291-0.35,0.593-0.496,0.904C56.21,102.03,56.012,103.009,56,104v64H24
          c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h16.968l31.096,241.024c0.515,3.99,3.913,6.977,7.936,6.976h188.32
          c9.073,10.17,22.051,15.99,35.68,16h12.528c8.786-0.008,17.45-2.053,25.312-5.976c11.439-5.686,24.881-5.686,36.32,0
          c7.862,3.923,16.526,5.968,25.312,5.976H416c26.499-0.026,47.974-21.501,48-48v-48C463.974,357.501,442.499,336.026,416,336z
          M328,16h16v16h-16V16z M352,184v16H240v-16H352z M216.568,64c4.013-27.535,27.606-47.965,55.432-48h40v20.16L277.192,64H216.568z
          M272,80v16h-32V80H272z M216,131.312L235.312,112h41.376L312,147.312V168h-96V131.312z M208,184h16v56
          c-0.017,3.047,1.699,5.838,4.424,7.2l48,24c2.341,1.154,4.115,3.205,4.92,5.688c0.829,2.665,0.541,5.552-0.8,8
          c-2.302,4.619-7.912,6.497-12.531,4.194c-0.007-0.003-0.014-0.007-0.021-0.01l-32.48-16.24c-3.97-1.94-8.76-0.294-10.7,3.676
          c-0.531,1.088-0.809,2.282-0.812,3.492v80c0,8.837-7.163,16-16,16v-72h-16v72h-16v-72h-16v72h-16v-72h-16v72
          c-8.837,0-16-7.163-16-16V184H208z M104,16h32v40h-32V16z M99.84,72h40.32l19.2,24H80.64L99.84,72z M72,112h96v56H72V112z M32,200
          v-16h64v16H32z M256,384v48c0.014,5.454,0.961,10.865,2.8,16H87.032L57.096,216H96v144c0,17.673,14.327,32,32,32h80
          c17.673,0,32-14.327,32-32v-67.056l20.896,10.448c12.627,6.232,27.915,1.048,34.147-11.579c0.026-0.052,0.051-0.105,0.077-0.157
          c3.099-6.143,3.626-13.268,1.464-19.8c-2.132-6.535-6.802-11.937-12.96-14.992L240,235.056V216h86.904l-15.488,120H304
          C277.501,336.026,256.026,357.501,256,384z M448,432c0,17.673-14.327,32-32,32h-12.528c-6.301-0.009-12.514-1.476-18.152-4.288
          c-15.95-7.925-34.69-7.925-50.64,0c-5.638,2.812-11.851,4.279-18.152,4.288H304c-17.673,0-32-14.327-32-32v-12.32
          c8.773,7.927,20.176,12.317,32,12.32h12.528c8.786-0.008,17.45-2.053,25.312-5.976c11.439-5.686,24.881-5.686,36.32,0
          c7.862,3.923,16.526,5.968,25.312,5.976H416c11.824-0.003,23.227-4.393,32-12.32V432z M416,416h-12.528
          c-6.301-0.009-12.514-1.476-18.152-4.288c-15.95-7.925-34.69-7.925-50.64,0c-5.638,2.812-11.851,4.279-18.152,4.288H304
          c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32h12.528c6.301,0.009,12.514,1.476,18.152,4.288
          c15.951,7.92,34.689,7.92,50.64,0c5.638-2.812,11.851-4.279,18.152-4.288H416c17.673,0,32,14.327,32,32
          C448,401.673,433.673,416,416,416z"/>
        <Rect fill={color} x="408" y="368" width="16" height="16"/>
        <Rect fill={color} x="328" y="368" width="16" height="16"/>
        <Rect fill={color} x="296" y="376" width="16" height="16"/>
        <Rect fill={color} x="376" y="376" width="16" height="16"/>
      </G>
    </Svg>
  </View>
)};
