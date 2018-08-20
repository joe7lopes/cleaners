import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import { LanguageBox, ServicesBox } from '../../components/UI';

class ClientFilter extends React.Component {

  state = {
    value: 0,
    languages: [],
    services: []
  }

  componentDidMount(){
    const languages = [
      {id: 1, name:'ENG', selected: false},
      {id: 2, name:'GER', selected: false},
      {id: 3, name:'PL', selected: false}
    ];

    const services = [
      {id: 1, name: 'Cleaning', selected: false},
      {id: 2, name: 'Ironing', selected: false},
      {id: 3, name: 'Washing', selected: false},
    ]

    this.setState({languages, services});
  }

  handleLanguageSelection = (id) => {
    let languages = this.state.languages.slice();
    const index = languages.findIndex(el => {
      return id === el.id;
    });
    
    languages[index].selected = !languages[index].selected;
    this.setState({languages});
  }

  handleServiceSelection = (id) => {
    let services = this.state.services.slice();
    const index = services.findIndex(el => {
      return id === el.id;
    });
    
    services[index].selected = !services[index].selected;
    this.setState({services});
  }

  renderLanguages = () => {
    const { languages } = this.state;
    
    return languages.map(lang => {
        const {id, name, selected } = lang;
      return <LanguageBox key={id} text={name} selected ={selected} onSelect={()=>this.handleLanguageSelection(id)}/>
    });
  }

  renderServices = () => {
    const { services } = this.state;

    return services.map(service => {
      const {id, name, selected } = service;
    return <ServicesBox key={id} text={name} selected ={selected} onSelect={()=>this.handleServiceSelection(id)}/>
  });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text h1>client filter</Text>
        <Text h4>Languages</Text>
        <View style={styles.languagesContainer}>
          {this.renderLanguages()}
        </View>
        <Text h4>Services</Text>
          <View style={styles.servicesContainer}>
            {this.renderServices()}
          </View>
          <Text h4>Price</Text>
          <Text> TODO slider</Text>
        <Button title="Filter"/>
      </View>
    );
  }

}

export default ClientFilter;

const styles = StyleSheet.create({
container: {
  flex: 1
},
languagesContainer: {
  flexDirection: 'row'
},
servicesContainer: {
  flexDirection: 'row'
}
});