import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import {FormInput, FormLabel, Avatar, Button} from 'react-native-elements';
import {LanguageBox} from '../../components/UI';
import {languages as languagesData} from '../../config/data';

class ClientProfile extends React.Component {

  state = {
    name: '',
    address: '',
    phone: '',
    languages: []
  }

  componentDidMount() {
    let languages = languagesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    this.setState({languages});
  }

  handleLanguageSelection = (id) => {
    let languages = this
      .state
      .languages
      .slice();
    const index = languages.findIndex(el => {
      return id === el.id;
    });

    languages[index].selected = !languages[index].selected;
    this.setState({languages});
  }

  renderLanguages = () => {
    const {languages} = this.state;

    return languages.map(lang => {
      const {id, name, selected} = lang;
      return <LanguageBox
        style={styles.languageBox}
        key={id}
        text={name}
        selected={selected}
        onSelect={() => this.handleLanguageSelection(id)}/>
    });
  }

  render() {
    const {name, phone, address} = this.state;
    return (
      <ScrollView
        contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <Avatar
            xlarge
            rounded
            title="AS"
            onPress={() => console.log("upload picture not implemented")}
            activeOpacity={0.7}/>
        </View>

        <View style={styles.body}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View>
              <FormLabel>Name</FormLabel>
              <Text style={styles.fullName}>{name}</Text>
              <FormLabel>Home Address</FormLabel>
              <FormInput value={address}/>
              <FormLabel>Phone</FormLabel>
              <FormInput value={phone}/>
            </View>

            <FormLabel>Languages</FormLabel>
            <View style={styles.row}>
              {this.renderLanguages()}
            </View>
          </KeyboardAvoidingView>
        </View>

          <Button title="Save"  
            buttonStyle= {styles.saveButton} 
          />

      </ScrollView>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({profile}) => {
    return {
      user: profile.user,
      error: profile.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ClientProfile);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  row: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  fullName: {
    paddingLeft: 20,
    paddingTop: 8,
    color: 'gray'
  },
  languageBox: {
    marginRight: 8
  },
  saveButton: {
    bottom: 20,
    borderRadius: 60
  }
});