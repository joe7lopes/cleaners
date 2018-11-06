import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {PhotoUpload} from '../components/UI';
import {color} from '../config/styles';
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
        return (<Ironing width={width} height={height} selected={true}/>)
      case 'WACHING':
        return (<Waching width={width} height={height} selected={true}/>)
      case 'CLEANING':
        return (<Cleaning width={width} height={height} selected={true}/>)
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
      <PhotoUpload>
        <Image
        style={styles.image}
          resizeMode='cover'
            source={{
            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
            }}
        />
      </PhotoUpload>

      <View style={styles.detailsContainer}>
        <Text style={[styles.price, {marginBottom: 5}]}>{price}zl /h</Text>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {renderServices()}
        </View>
      </View>

      <View style={[styles.rating, {flexDirection: 'row'}]}>
        <Star />
        <Text>{rating}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal:8,
    borderRadius: 10
  },
  detailsContainer:{
    flex:2,
    marginRight: 8,
    marginLeft: 8
  },
  rating:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  price: {
    color: color.primary,
    fontWeight: 'bold'
  },
  name: {
    color: color.black,
    fontWeight: 'bold'
  }
});