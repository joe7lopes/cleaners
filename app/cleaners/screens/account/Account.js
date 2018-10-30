import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import _ from 'lodash';
import {Avatar, PrimaryTextButton as Button} from '../../components/UI';
import {ActionCreators} from '../../actions';
import AccountRow from './AccountRow';
import {route, screen} from '../../config/routes/navigation';
import {FAILURE, SUCCESS} from "../../actions/types";
import {User, Language, Notifications, DataProtection, Tracking} from '../../assets/images';

class Account extends React.Component {

    state = {
        rows: [
            {
                id: 1,
                title: 'View Profile',
                image: 'user',
                screenName: screen.profile
            }, {
                id: 2,
                title: 'Language',
                image: 'icon1'
            }, {
                id: 3,
                title: 'Notifications',
                image: 'icon2'
            }, {
                id: 4,
                title: 'Tracking Information',
                image: 'icon3'
            }, {
                id: 5,
                title: 'Data protection',
                image: 'icon4'
            }
        ]
    }
    handleOnProfile = () => {
        this
            .props
            .navigation
            .navigate(screen.profile);
    }
    handleOnPress = (screenName) => {
        this
            .props
            .navigation
            .navigate(screenName);
    }
    handleOnLogout = () => {
        this
            .props
            .logout();
    }
   
    renderRow = ({item}) => {
        let style = {
            height: 60
        };
        if (item.id === this.state.rows.length) {
            style.borderBottomWidth = 0;
        }
        const imageComponent = this.getImage(item.id);
        return (
            <TouchableOpacity onPress={() => this.handleOnPress(item.screenName)}>
                <AccountRow title={item.title} image={imageComponent} style={style}/>
            </TouchableOpacity>
        )
    }

    getImage = (id) => {
        const width = height = 30;
        switch (id) {
            case 1:
                return <User width={width} height={height}/>
            case 2:
                return <Language width={width} height={height}/>
            case 3:
                return <Notifications width={width} height={height}/>
            case 4:
                return <Tracking width={width} height={height}/>
            case 5:
                return <DataProtection width={width} height={height}/>
            default:
                return <User width={width} height={height}/>
        }
    }
    renderFooter = () => (
        <Button 
            title={'Logout'} 
            onPress={this.handleOnLogout}
            style= {styles.logoutButton}/>
    )

    componentWillReceiveProps(nextProps) {
        const {status} = nextProps;
        if (status === SUCCESS || status === FAILURE) {
            this
                .props
                .navigation
                .navigate(route.auth);
        }
    }

    render() {
        const {firstName, lastName} = this.props;
        const title = `${firstName.toUpperCase()[0] || ""}${lastName.toUpperCase()[0] || ""}`;
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.handleOnProfile}>
                        <Avatar rounded large title={title}/>
                        <Text
                            style={{
                            textAlign: 'center',
                            marginTop: 8
                        }}>
                            {`${firstName} ${lastName}`}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
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
    firstName: _.get(user,'profile.firstName', 'N' ), 
    lastName: _.get(user,'profile.lastName', 'A' )
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 8
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4
    },
    body: {
        flex: 2
    },
    logoutButton: {
        marginTop: 20,
        marginBottom: 20
    }
});