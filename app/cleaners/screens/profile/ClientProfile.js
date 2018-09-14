import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions';
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import {FormInput, FormLabel, Avatar, Button} from 'react-native-elements';

import {LanguageBox} from '../../components/UI';
import {languages as languagesData} from '../../config/data';

class ClientProfile extends React.Component {

  state = {
    address: '',
    languages: []
  }

  componentDidMount() {

    this
      .props
      .fetchUser(123);

    let languages = languagesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    this.setState({languages});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.profile){
      this.updateLanguages(nextProps.profile);
      this.setState({address:nextProps.profile.address});
    }
  }

  updateLanguages = (profile) => {
    const receivedLanguages = profile.languages || {};
    const codes = Object.keys(receivedLanguages);
    codes.forEach(code => {
      this.handleLanguageSelection(code);
    });
  }

  renderLanguages = () => {
    const {languages} = this.state;

    return languages.map(lang => {
      const {code, name, selected} = lang;
      return <LanguageBox
        style={styles.languageBox}
        key={code}
        text={name}
        selected={selected}
        onSelect={() => this.handleLanguageSelection(code)}/>
    });
  }

  //Handlers
  handleLanguageSelection = (code) => {
    let languages = this
      .state
      .languages
      .slice();
    const index = languages.findIndex(el => {
      return code === el.code;
    });

    languages[index].selected = !languages[index].selected;
    this.setState({languages});
  }

  handleSaveProfile = () => {
    var state = Object.assign({}, this.state);
    const languages = state.languages.filter(lang => {
      return lang.selected === true;
    });
    state.languages = languages;
    
    this.props.saveUser(state);

  }

  render() {
    const {firstName, lastName, phone, address} = this.props.profile;
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <Avatar
            xlarge
            rounded
            title={`${firstName.toUpperCase()[0] || ""}${lastName.toUpperCase()[0] || ""}`}
            onPress={() => console.log("upload picture not implemented")}
            activeOpacity={0.7}/>
        </View>

        <View style={styles.body}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View>
              <FormLabel>Name</FormLabel>
              <Text style={styles.readOnlyText}>{`${firstName} ${lastName}`}</Text>
              <FormLabel>Home Address</FormLabel>
              <FormInput value={address} onChangeText={address => this.setState({address})}/>
              <FormLabel>Phone</FormLabel>
              <Text style={styles.readOnlyText}>{phone}</Text>
            </View>

            <FormLabel>Languages</FormLabel>
            <View style={styles.row}>
              {this.renderLanguages()}
            </View>
          </KeyboardAvoidingView>
        </View>

        <Button
          title="Save"
          buttonStyle={styles.saveButton}
          onPress={this.handleSaveProfile}/>

      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8
  },
  row: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  readOnlyText: {
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