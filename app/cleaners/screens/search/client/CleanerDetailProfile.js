import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FormLabel} from 'react-native-elements';
import {ServicesBox, LanguageBox} from '../../../components/UI';

export default class CleanerDetailProfile extends React.Component {

  renderServices = () => {
    const {services} = this.props;
    return services.map(service => {
      const {id, name} = service;
      return <ServicesBox key={id} text={name} selected={true}/>
    });
  };

  renderLanguages = () => {
    const {languages} = this.props;
    return languages.map(lang => {
      const {code, name} = lang;
      return <LanguageBox key={code} text={name} selected ={true}/>
    });
  }

  render() {
    const {firstName, lastName, price, services = [], languages = []} = this.props;
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <Text style={styles.text}>
          {`${firstName} ${lastName}`}
        </Text>
        <FormLabel>Services</FormLabel>
        <View style={styles.boxContainer}>
          { services.length > 0 && this.renderServices()}
        </View>

        <FormLabel>Languages</FormLabel>
        <View style={styles.boxContainer}>
          {languages.length > 0 && this.renderLanguages()}
        </View>
        <FormLabel>Price</FormLabel>
        <Text style={styles.text}>{`${price}zl`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  text: {
    marginLeft: 20,
    marginTop: 8
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 20
  }
});
