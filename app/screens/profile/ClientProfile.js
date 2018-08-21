import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FormInput, FormLabel, Avatar} from 'react-native-elements';
import { LanguageBox } from '../../components/UI';
import { languages as languagesData } from '../../config/data';

class ClientProfile extends React.Component {

  state = {
    name: 'Szuter Apolinary',
    address: 'Ul traugutta',
    phone: '+48213213',
    languages: [],
  }

  componentDidMount(){
    let languages = languagesData.map(lang => {
      return {...lang, selected: false};
    });

    this.setState({languages});
  }

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

  render(){
    const { name, phone, languages, address} = this.state;
    return(
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Avatar
              xlarge
              rounded
              title="AS"
              onPress={() => console.log("upload picture not implemented")}
              activeOpacity={0.7}
            />
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.body}>
              <View>
                <FormLabel>Name</FormLabel>
                <FormInput value={name} />
                <FormLabel>Home Address</FormLabel>
                <FormInput value={address} />
                <FormLabel>Phone</FormLabel>
                <FormInput value={phone} />
              </View>

              <FormLabel>Languages</FormLabel>
              <View style={styles.row}>
                {this.renderLanguages()}  
              </View>

              <View style={styles.lougoutContainer}>
                <Text>Logout</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        
      </SafeAreaView>
    );
  }
}

export default ClientProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
  flex:2,
  paddingLeft: 8,
  paddingRight: 8,
  },
  lougoutContainer: {
    backgroundColor: 'green',
    alignItems: 'center'
  },
  row: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  }
});