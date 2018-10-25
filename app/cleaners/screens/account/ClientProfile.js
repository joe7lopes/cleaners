import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {ActionCreators} from '../../actions';
import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, FormInput, FormLabel} from 'react-native-elements';
import {LanguageBox, Loader, StatusActivityStatusIndicator} from '../../components/UI';
import {languages as languagesData} from '../../config/data';
import {SUCCESS, PENDING, FAILURE} from "../../actions/types";

class ClientProfile extends React.Component {

    state = {
        address: '',
        languages: {},
        showStatusIndicator: false
    }

    componentDidMount() {
        let availableLanguages = languagesData.map(lang => ({...lang, selected: false}));
        availableLanguages = _.mapKeys(availableLanguages, 'code');
        _.forOwn(this.props.user.languages,(_,k)=> availableLanguages[k].selected = true);
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
        console.log("saving", viewModel);
        this.props.saveProfile(viewModel);
    }

    renderLanguages = () => {
        const {languages} = this.state;
        const codes = Object.keys(languages);

        return codes.map(key => {
            const {code, name, selected} = languages[key];
            return <LanguageBox
                style={styles.languageBox}
                key={code}
                text={name}
                selected={selected}
                onSelect={() => this.handleLanguageSelection(code)}/>
        });
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
        const title = `${firstName.toUpperCase()[0] || ""}${lastName.toUpperCase()[0] || ""}`;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Loader message="Saving..." loading={this.props.status === PENDING}/>
                {this.state.showStatusIndicator && this.renderStatusIndicator()}
                <View style={styles.header}>
                    <Avatar
                        xlarge
                        rounded
                        title={title}
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

const mapStateToProps = ({user}) => ({
    user: user.profile,
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
        marginVertical: 20
    }

});