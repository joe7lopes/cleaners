import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {color, font} from '../config/styles';
import {Waching, Ironing, Cleaning, Star} from '../assets/images';

export default CleanerCard = ({
  style,
  firstName = '',
  lastName = '',
  services = [],
  price = 0,
  rating = 0
}) => {

  const getServiceImage = (serviceName) => {
    const width = height= '25';
    switch (serviceName) {
      case 'IRONING':
        return (<Ironing width={width} height={height} color={color.primary}/>)
      case 'WACHING':
        return (<Waching width={width} height={height} color={color.primary}/>)
      case 'CLEANING':
        return (<Cleaning width={width} height={height} color={color.primary}/>)
    }
  }

  const renderServices = () => services.map(service => {
      const image = getServiceImage(service.name);
     return ( 
      <View key={service.uid} style={{marginLeft: 10}}>
        {image}
      </View>
      )
    });

  return (
    <View style={[styles.container, style]}>
    
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/images/default_avatar.png')}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.price, {marginBottom: 5}]}>{price}zl /h</Text>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {renderServices()}
        </View>
      </View>

      <View style={[styles.rating, {flexDirection: 'row'}]}>
        <Star width='20' height='20' />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal:8,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer:{
    flex:3,
    paddingHorizontal: 16
  },
  rating:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: color.gray,
    borderWidth: 0.5
  },
  price: {
    color: color.primary,
    fontWeight: 'bold'
  },
  name: {
    color: '#424242',
    fontWeight: 'bold'
  },
  ratingText: {
    marginLeft: 4,
    color: color.primary,
    fontWeight: 'bold',
    fontSize: font.m2
  }
});