import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions';
import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, FormInput, FormLabel} from 'react-native-elements';
import {LanguageBox} from '../../components/UI';
import {languages as languagesData} from '../../config/data';
import {SUCCESS} from "../../actions/types";

class ClientProfile extends React.Component {

    state = {
        address: '',
        languages: {}
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

    handleLanguageSelection = (code) =>{
        const {languages} = this.state;
        let selected = languages[code].selected;
        languages[code].selected = !selected;
        this.setState({languages});
    }

    handleSaveProfile = () => {
        let viewModel = Object.assign({}, this.state);
        const {languages} = this.state;
        const keys = Object.keys(languages);
        const selectedLanguages = keys.filter(key=> languages[key].selected === true)
        viewModel.languages = selectedLanguages;
        this.props.saveProfile(viewModel);
    }

    componentDidMount() {
        let languages = languagesData;
        const userSelectedLanguages = this.props.user.languages;
        Object.keys(languages)
            .forEach(key=> languages[key].selected = userSelectedLanguages[key] ? true: false);
        this.setState({languages});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.status === SUCCESS){
            const languages = nextProps.user.languages || {};
            let stateLanguages = Object.assign({},this.state.languages);
            const codes = Object.keys(languages);
            codes.forEach(code => stateLanguages[code].selected = true);
            this.setState({languages: stateLanguages});
        }
    }

    render() {
        const {firstName = '', lastName = '', phone, address} = this.props.user;
        const title = `${firstName.toUpperCase()[0] || ""}${lastName.toUpperCase()[0] || ""}`;
        return (
            <ScrollView contentContainerStyle={styles.container}>
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