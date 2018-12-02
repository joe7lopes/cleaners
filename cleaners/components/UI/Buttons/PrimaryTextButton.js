import React from 'react';
import {TouchableOpacity, StyleSheet, Text}from 'react-native';
import _ from 'lodash';
import {color, font} from '../../../config/styles';


export default ({onPress, style, title}) => {
    const aspectRatio = styles.text.fontSize / 0.33;
    const height = _.get(style, 'height', aspectRatio);
    const borderRadius = height/6;
    const buttonStyle = {borderRadius, height, ...styles.button,}
    return (
        <TouchableOpacity
            style={[buttonStyle, style]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )};

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.primary,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: font.m1,
    }
});