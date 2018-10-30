import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Button, FormInput, FormLabel} from 'react-native-elements';
import {ActionCreators} from '../../actions';
import {FAILURE, SUCCESS} from '../../actions/types';
import {screen} from '../../config/routes/navigation';
import {screenId} from '../../tests';

class Register extends React.Component {

    state = {
        phone: undefined
    }
    handleRegistration = () => {
        const {phone} = this.state;
        this.props.registerPhone(phone);
    }
    handleOnAlreadyHaveAccount = () => {
        const {phone} = this.state;
        this
            .props
            .navigation
            .navigate(screen.login, {phone});
    }

    componentWillReceiveProps(nextProps) {
        const {status} = nextProps;
        if (status === SUCCESS) {
            const {phone} = this.state;
            this.props.navigation.navigate(screen.login, {phone});
        }else if(status === FAILURE){

        }
    }

    render() {
        const {phone} = this.state;
        return (
            <SafeAreaView testID={screenId.registration} style={styles.container}>

                <View style={styles.body}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Phone registration</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <FormLabel>Enter Phone Number</FormLabel>
                        <FormInput value={phone} onChangeText={phone => this.setState({phone})}/>
                    </View>
                </View>
                <Button
                    large
                    title='Register'
                    style={styles.registerButton}
                    onPress={this.handleRegistration}/>
                <TouchableWithoutFeedback onPress={this.handleOnAlreadyHaveAccount}>
                    <View>
                        <Text style={styles.existingAccountText}>I already have an account</Text>
                    </View>
                </TouchableWithoutFeedback>

            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({auth}) => ({
    status: auth.status,
    error: auth.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        flex: 1,
        justifyContent: 'center'
    },
    inputForm: {
        flex: 1
    },
    titleText: {
        fontSize: 40,
        textAlign: 'center'
    },
    existingAccountText: {
        bottom: 20,
        marginLeft: 20,
        color: 'blue',
        textAlign: 'center'
    },
    registerButton: {
        bottom: 60
    }

});