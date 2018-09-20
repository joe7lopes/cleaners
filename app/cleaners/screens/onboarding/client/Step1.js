import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button, FormInput, FormLabel} from 'react-native-elements';
import {route} from '../../../config/routes/navigation';
import {ActionCreators} from '../../../actions';
import {SUCCESS} from '../../../actions/types';

class Step1 extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        formErrors: {
            firstName: 'required',
            lastName: 'required',
            address: 'required',
            email: 'required'
        },
        isFormValid: false
    }

    handleUserInput = (fieldName, value) => {
        this.setState({[fieldName]: value}, () => {
            this.validateField(fieldName, value);
        });
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;

        switch (fieldName) {
            case 'email':
                let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '': 'invalid email';
                break;
            default:
                let fieldValid = value ? '' : 'Required';
                fieldValidationErrors[fieldName] = fieldValid;
        }

        let keys = Object.keys(fieldValidationErrors);
        let isFormValid = keys.every(key => {
            return fieldValidationErrors[key].length <= 0;
        });

        this.setState({formErrors: fieldValidationErrors, isFormValid});
    }

    handleOnDone = () => {
        const {userType} = this.props;
        const newUser = {
            ...Object.assign({}, this.state),
            type: userType
        };

        this.props.createUser(newUser);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status === SUCCESS) {
            this.props.navigation.navigate(route.clientApp);
        }
    }

    render() {
        const {firstName, lastName, address, email, isFormValid} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FormLabel>First Name</FormLabel>
                <FormInput
                    value={firstName}
                    onChangeText={(firstName) => this.handleUserInput('firstName', firstName)}/>
                <FormLabel>last Name</FormLabel>
                <FormInput value={lastName} onChangeText={(text) => this.handleUserInput('lastName', text)}/>
                <Text>By letting us know where you live, we will filter cleaners of your area.</Text>
                <FormLabel>Address</FormLabel>
                <FormInput value={address} onChangeText={(text) => this.handleUserInput('address', text)}/>
                <FormLabel>Email Address</FormLabel>
                <FormInput value={email} onChangeText={(text) => this.handleUserInput('email', text)}/>
                <Button
                    style={styles.doneButton}
                    title='Done'
                    onPress={this.handleOnDone}
                    disabled={!isFormValid}
                />
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({user}) => ({
    status: user.status,
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    doneButton: {
        marginTop: 20
    }
});