import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const AccountRow = ({title, image, style}) =>(
    <View style={[styles.container, style]}>
        <View style={styles.image}>
            <View>{image}</View>
        </View>
        <Text>{title}</Text>
    </View>
    )

export default AccountRow;

const styles = StyleSheet.create({
   container:{
       alignItems: 'center',
       paddingVertical: 8,
       paddingHorizontal: 8,
       borderBottomWidth: 0.3,
       borderBottomColor: '#d3d3d3',
       flexDirection: 'row',
       backgroundColor: 'white'
   },
    image:{
       marginRight: 20
    }

});

