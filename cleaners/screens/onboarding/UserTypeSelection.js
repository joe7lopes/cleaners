import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {CLIENT, CLEANER} from '../../config/profileTypes';
import {screen} from '../../config/routes/navigation';

class UserTypeSelection extends React.Component {

  handleOnClient = () => {
    this.goToNextStep(CLIENT);
  }

  handleOnCleaner = () => {
    this.goToNextStep(CLEANER);
  }

  goToNextStep = (userType) => {
    this
      .props
      .navigation
      .navigate(screen.onboardingStep1, {userType: userType});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            I'am :
          </Text>
        </View>
        <View style={styles.body}>
          <Button
            title="looking for a cleaner"
            buttonStyle={styles.clientButton}
            onPress={this.handleOnClient}></Button>
          <Button
            title="A cleaner"
            buttonStyle={styles.cleanerButton}
            onPress={this.handleOnCleaner}></Button>
        </View>

      </SafeAreaView>

    );
  }
}

export default UserTypeSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  header: {
    alignItems: 'center'
  },
  body: {},
  headerText: {
    fontSize: 40
  },
  clientButton: {
    marginTop: 60,
    backgroundColor: 'blue'
  },
  cleanerButton: {
    marginTop: 20,
    backgroundColor: 'pink'
  }
});