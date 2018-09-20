import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, View} from 'react-native';
import {route} from '../config/routes/navigation';
import {ActionCreators} from '../actions';
import {CLEANER, CLIENT} from '../config/profileTypes';
import {FAILURE, SUCCESS} from '../actions/types';

class AppLoading extends React.Component {

    getAppFor = (profileType) => {
        const type = String(profileType).toUpperCase() || undefined;
        if (type === CLIENT) {
            return route.clientApp;
        } else if (type === CLEANER) {
            return route.cleanerApp
        } else {
            console.log("App error: unable to retrieve profile type", type);
            return route.onboarding
        }
    }

    componentWillMount() {
        // AsyncStorage.clear();
        this.props.fetchProfile();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.status === SUCCESS) {
            const {isNewUser, type} = nextProps.profile;
            this.props.navigation.navigate(isNewUser ? route.onboarding : this.getAppFor(type));
        } else if (nextProps.status === FAILURE) {
            console.log("App Error: unable to fetch current user.");
            this.props.navigation.navigate(route.auth);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AppLoading...</Text>
            </View>
        )
    }

}

const mapStateToProps = ({user}) => ({
    profile: user.profile,
    status: user.status
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLoading);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});