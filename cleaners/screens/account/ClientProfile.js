import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import _ from 'lodash';
import {ActionCreators} from '../../actions';
import {SUCCESS, PENDING, FAILURE} from '../../actions/types';
import {languages as languagesData} from '../../config/data';
import {
    PhotoUpload,
    Loader,
    StatusActivityStatusIndicator,
    PrimaryTextButton as Button,
    LabledInput,
    LabledAddressInput,
    LabledItemsBox
} from '../../components/UI';

class ClientProfile extends React.Component {

    state = {
        address: '',
        languages: {},
        showStatusIndicator: false
    }

    componentDidMount() {
        let availableLanguages = languagesData.map(lang => ({...lang, selected: false}));
        availableLanguages = _.mapKeys(availableLanguages, 'code');
        const {userLanguages =[]} = this.props.user;
        userLanguages.map(lang => availableLanguages[lang.code].selected = true);
        const {address} = this.props.user
        this.setState({address, languages: availableLanguages});
    }

    componentWillReceiveProps(nextProps){
        const {status} = nextProps;
        if(status === SUCCESS || status === FAILURE){
            this.setState({showStatusIndicator: true});
        }
    }

    handleLanguageSelection = (code) =>{
        const {languages} = this.state;
        let selected = languages[code].selected;
        languages[code].selected = !selected;
        this.setState({languages});
    }

    handleSaveProfile = () => {
        let viewModel = Object.assign({}, this.state);
        const selectedLanguages = _.pickBy(this.state.languages,(v,_)=> v.selected === true);
        viewModel.languages = selectedLanguages;
        this.props.saveProfile(viewModel);
    }

    renderStatusIndicator = () => {
        const {showStatusIndicator} = this.state;
        const {status} = this.props;

        switch (status) {
            case SUCCESS:
                message = "Profile saved successfully";
                break;
            case FAILURE:
                message = "Error: Unable to save profile";
            default:
                message = "Something went wrong";
                break;
        }

        setTimeout(() => {
            this.setState({showStatusIndicator: false});
        }, 2000);

        return (
            <StatusActivityStatusIndicator
                visible={showStatusIndicator}
                status={status}
                message={message}/>
        )
    }

    render() {
        const {firstName = '', lastName = '', phone, address} = this.props.user;
        const languages = _.values(this.state.languages);
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Loader message="Saving..." loading={this.props.status === PENDING}/>
                {this.state.showStatusIndicator && this.renderStatusIndicator()}
                <View style={styles.header}>
                    <PhotoUpload>
                        <Image
                            style={styles.image}
                            resizeMode='cover'
                            source={{
                                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                            }}
                        />
                    </PhotoUpload>
                </View>

                <View style={styles.body}>
                    <KeyboardAvoidingView behavior="padding" enabled>

                        <LabledInput
                            label="Name"
                            value={`${firstName} ${lastName}`} />
                        <LabledInput
                            containerStyle={styles.marginTop}
                            label="Phone"
                            value={phone} />
                        <LabledAddressInput
                            containerStyle={styles.marginTop}
                            label="Address"
                            value={address}/>

                        <LabledItemsBox
                            containerStyle={[styles.marginTop]}
                            label="I speak"
                            items={languages}
                            onItemPress={this.handleLanguageSelection}/>

                    </KeyboardAvoidingView>
                </View>

                <Button
                    title="Save"
                    style={styles.saveButton}
                    onPress={this.handleSaveProfile}/>

            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({user}) => ({
    user: user.profile || {
        firstName: 'Andres',
        lastName: 'Mean',
        phone: "+46 444ii",
        languages: [{code:'en'}],
        address: 'ul traugutta'
    },
    status: user.status
});

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
        marginHorizontal: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    saveButton: {
        marginVertical: 20,
        marginHorizontal: 8
    },
    marginTop: {
        marginTop: 16
    },
    languages: {
        marginTop: 16,
        flexDirection: 'row'
    }

});