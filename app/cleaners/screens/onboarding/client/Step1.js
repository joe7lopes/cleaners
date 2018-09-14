import React from 'react'
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {route} from '../../../config/routes/navigation';

class Step1 extends React.Component {

  state = {
    firstName: undefined,
    lastName: undefined,
    address: undefined,
    email: undefined
  }

  handleOnDone = () => {
    const {userType} = this.props;
    const viewModel = {
      ...Object.assign({}, this.state),
      userType
    };
    console.log(viewModel);

    this.props.navigation.navigate(route.clientApp);
  }

  render() {
      const {firstName, lastName, address, email} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FormLabel>First Name</FormLabel>
        <FormInput value={firstName} onChangeText={(firstName)=> this.setState({firstName})}/>
        <FormLabel>last Name</FormLabel>
        <FormInput value={lastName} onChangeText={(lastName)=> this.setState({lastName})}/>
        <Text>By letting us know where you live, we will filter cleaners of your area.</Text>
        <FormLabel>Address</FormLabel>
        <FormInput value={address} onChangeText={(address)=> this.setState({address})}/>
        <FormLabel>Email Address</FormLabel>
        <FormInput value={email} onChangeText={(email)=> this.setState({email})}/>
        <Button style={styles.doneButton} title='Done' onPress={this.handleOnDone}/>
      </SafeAreaView>
    );
  }
}

export default Step1;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  doneButton: {
    marginTop: 20
  }
});