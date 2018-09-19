import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {route} from '../config/routes/navigation';
import {ActionCreators} from '../actions';
import {CLIENT, CLEANER} from "../config/profileTypes";

class AppLoading extends React.Component {

    componentWillMount() {
        // AsyncStorage.clear();
        this.props.fetchProfile();
    }

    componentWillReceiveProps(nextProps) {
        const {isNewUser, type} = nextProps.profile;
        console.log("new user %s profile type %s", isNewUser, type);
        this.props.navigation.navigate(isNewUser ? route.onboarding : this.getAppFor(type));
    }

    getAppFor = (profileType) => {
        const type = String(profileType).toUpperCase() || undefined;
        if(type === CLIENT){
            return route.clientApp;
        }else if(type === CLEANER){
            return route.cleanerApp
        }else{
            console.log("unable to retrieve profile type", type);
            return route.onboarding
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
    profile: user.profile
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