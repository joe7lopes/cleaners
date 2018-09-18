import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {FormInput, FormLabel, Button} from 'react-native-elements';
import {LanguageBox, ServicesBox} from '../../../components/UI';
import {languages as languagesData, services as servicesData} from '../../../config/data';
import {route} from '../../../config/routes/navigation';
import {ActionCreators} from '../../../actions';
import {SUCCESS} from '../../../actions/types';

class Step1 extends React.Component {

  state = {
    firstName: undefined,
    lastName: undefined,
    phone: undefined,
    address: undefined,
    price: undefined,
    email: undefined,
    services: [],
    languages: []
  }

  componentDidMount() {
    let languages = languagesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    let services = servicesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    this.setState({languages, services});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === SUCCESS) {
      this
        .props
        .navigation
        .navigate(route.cleanerApp);
    }
  }

  //HANDLERS

  handleServiceSelection = (id) => {
    let services = this
      .state
      .services
      .slice();
    const index = services.findIndex(el => {
      return id === el.id;
    });

    services[index].selected = !services[index].selected;
    this.setState({services});
  };

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

  handleOnDone = () => {
    const {userType} = this.props;
    const newUser = {
      ...Object.assign({}, this.state),
      type: userType
    };
    this
      .props
      .createUser(newUser);
  }

  renderServices = () => {
    const {services} = this.state;

    return services.map(service => {
      const {id, name, selected} = service;
      return <ServicesBox
        key={id}
        style={{
        marginLeft: 8
      }}
        text={name}
        selected
        ={selected}
        onSelect={() => this.handleServiceSelection(id)}/>
    });
  };

  renderLanguages = () => {
    const {languages} = this.state;

    return languages.map(lang => {
      const {code, name, selected} = lang;
      return <LanguageBox
        key={code}
        style={{
        marginLeft: 8
      }}
        text={name}
        selected
        ={selected}
        onSelect={() => this.handleLanguageSelection(code)}/>
    });
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      address,
      email,
      price
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <View style={styles.body}>
            <FormLabel>First Name</FormLabel>
            <FormInput
              value={firstName}
              onChangeText={(firstName) => this.setState({firstName})}/>
            <FormLabel>last Name</FormLabel>
            <FormInput
              value={lastName}
              onChangeText={(lastName) => this.setState({lastName})}/>
            <FormLabel>Phone number</FormLabel>
            <FormInput value={phone} onChangeText={(phone) => this.setState({phone})}/>
            <FormLabel>Email Address</FormLabel>
            <FormInput value={email} onChangeText={(email) => this.setState({email})}/>
            <FormLabel>I'd like to receive offers from this area</FormLabel>
            <FormInput
              value={address}
              onChangeText={(address) => this.setState({address})}/>

            <FormLabel>I speak</FormLabel>
            <View style={[styles.rowContainer, styles.row]}>
              {this.renderLanguages()}
            </View>

            <FormLabel>I do</FormLabel>
            <View style={[styles.rowContainer, styles.row]}>
              {this.renderServices()}
            </View>
            <FormLabel>My price per hour (ZL)</FormLabel>
            <FormInput keyboardType='numeric' value={price}/>
          </View>
          <Button style={styles.button} title='Done' onPress={this.handleOnDone}/>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({user}) => ({status: user.status});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    flex: 1,
    marginTop: 40
  },
  row: {
    flexDirection: 'row'
  },
  rowContainer: {
    paddingTop: 20,
    paddingLeft: 20
  },
  button: {
    marginVertical: 20
  }
});