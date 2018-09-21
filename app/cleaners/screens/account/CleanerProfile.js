import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { FormInput, FormLabel, Avatar, Button} from 'react-native-elements';
import { LanguageBox, ServicesBox } from '../../components/UI';
import { 
  languages as languagesData,
  services as servicesData
} from '../../config/data';

class CleanerProfile extends React.Component {

  state = {
    name: 'Szuter Apolinary',
    phone: '+48213213',
    price: '50zl',
    languages: [],
    services: []
  }

  componentDidMount(){
    let languages = languagesData.map(lang => {
      return {...lang, selected: false};
    });

    let services = servicesData.map(lang => {
      return {...lang, selected: false};
    });

    this.setState({languages, services});
  }

  handleServiceSelection = (id) => {
    let services = this.state.services.slice();
    const index = services.findIndex(el => {
      return id === el.id;
    });
    
    services[index].selected = !services[index].selected;
    this.setState({services});
  };

  renderServices = () => {
    const { services } = this.state;

    return services.map(service => {
      const {id, name, selected } = service;
      return <ServicesBox key={id} text={name} selected ={selected} onSelect={()=>this.handleServiceSelection(id)}/>
    });
  };


  handleLanguageSelection = (id) => {
    let languages = this.state.languages.slice();
    const index = languages.findIndex(el => {
      return id === el.id;
    });
    
    languages[index].selected = !languages[index].selected;
    this.setState({languages});
  }

  renderLanguages = () => {
    const { languages } = this.state;
    
    return languages.map(lang => {
        const {id, name, selected } = lang;
      return <LanguageBox key={id} text={name} selected ={selected} onSelect={()=>this.handleLanguageSelection(id)}/>
    });
  }

  handleMapSelection = () => {
    console.log('on map selection');
  }

  render(){
    const { name, phone, price} = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
            <View style={styles.header}>
              <Avatar
                xlarge
                rounded
                title="AS"
                onPress={() => console.log("upload picture not implemented")}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.body}>
              <View>
                <FormLabel>Name</FormLabel>
                <FormInput value={name} />
                <FormLabel>Phone</FormLabel>
                <FormInput
                  keyboardType='phone-pad'
                  value={phone} />
              </View>

              <FormLabel>Languages</FormLabel>
              <View style={[styles.languagesContainer, styles.row]}>
                  {this.renderLanguages()}  
              </View>

              <FormLabel>Services</FormLabel>
              <View style={[styles.languagesContainer, styles.row]}>
                {this.renderServices()}  
              </View>

              <FormLabel>Price per hour (ZL)</FormLabel>
              <FormInput
                keyboardType='numeric'
                value={price} />

              <FormLabel>I'd like to receive offers from:</FormLabel>
              <TouchableWithoutFeedback onPress={this.handleMapSelection}>
                <View>
                  <Text>Anywhere</Text>
                </View>
              </TouchableWithoutFeedback>
              

              <View style={styles.lougoutContainer}>
              <Button
                raised
                title='Logout' />
              </View>
            </View>
            
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default CleanerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
  flex:2,
  paddingLeft: 8,
  paddingRight: 8,
  },
  lougoutContainer: {
    marginVertical: 20,
    alignItems: 'center'
  },
  languagesContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  servicesContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row'
  }
});