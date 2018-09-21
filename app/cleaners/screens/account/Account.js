import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {ActionCreators} from '../../actions';
import AccountRow from './AccountRow';
import {route, screen} from '../../config/routes/navigation';
import {FAILURE, SUCCESS} from "../../actions/types";

class Account extends React.Component {

    state = {
        rowHeight: 40,
        rows: [
            {id: 1, title: 'View Profile', image: 'icon0', screenName: screen.profile},
            {id: 2, title: 'Language', image: 'icon1'},
            {id: 3, title: 'Notifications', image: 'icon2'},
            {id: 4, title: 'Tracking Information', image: 'icon3'},
            {id: 5, title: 'Data protection', image: 'icon4'},
        ]
    }
    handleOnProfile = () => {
        this.props.navigation.navigate(screen.profile);
    }
    handleOnPress = (screenName) => {
        this.props.navigation.navigate(screenName);
    }
    handleOnLogout = () => {
        this.props.logout();
    }
    handleOnListLayout = (event) => {
        const {height} = event.nativeEvent.layout;
        const rowHeight = height / (this.state.rows.length + 1);
        this.setState({rowHeight});
    }
    renderRow = ({item}) => {
        let style = {height: this.state.rowHeight};
        if (item.id === this.state.rows.length) {
            style.borderBottomWidth = 0;
        }
        return (
            <TouchableOpacity onPress={() => this.handleOnPress(item.screenName)}>
                <AccountRow title={item.title} image={item.image} style={style}/>
            </TouchableOpacity>
        )
    }
    renderFooter = () => (
        <View>
            <Button title={'Logout'} onPress={this.handleOnLogout}/>
        </View>
    )

    componentWillReceiveProps(nextProps) {
        const {status} = nextProps;
        if (status === SUCCESS || status === FAILURE) {
            this.props.navigation.navigate(route.auth);
        }
    }

    render() {
        const {firstName, lastName} = this.props;
        const title = `${firstName.toUpperCase()[0] || "" }${lastName.toUpperCase()[0] || ""}`;
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.handleOnProfile}>
                        <Avatar rounded large title={title}/>
                        <Text style={{textAlign: 'center', marginTop: 8}}>
                            {`${firstName} ${lastName}`}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.body} onLayout={this.handleOnListLayout}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.rows}
                        renderItem={this.renderRow}
                        keyExtractor={(item) => item.id.toString()}
                        bounces={false}
                        ListFooterComponent={this.renderFooter}/>
                </View>

            </SafeAreaView>

        )
    };

}

const mapStateToProps = ({auth, user}) => ({
    status: auth.status,
    firstName: user.profile.firstName,
    lastName: user.profile.lastName
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        borderBottomWidth: 0.3,
        borderBottomColor: '#d3d3d3',
    },
    body: {
        flex: 2
    }

});