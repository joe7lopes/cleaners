import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import { LanguageBox, ServicesBox, PrimaryTextButton as Button } from '../../../components/UI';
import { languages as languagesData, rating, services as servicesData } from '../../../config/data';
import { ActionCreators } from '../../../actions';
import Rating from "../../../components/UI/Ratings/Rating";
import { Ironing, Waching, Cleaning } from "../../../assets/images";
import { color } from '../../../config/styles';

class SearchFilter extends React.Component {

    state = {
        address: '',
        priceMin: 0,
        priceMax: 100,
        languages: [
            {code: 'pol', name: 'Polish', selected: false},
            {code: 'ukr', name: 'Ukrainian', selected: true},
            {code: 'eng', name: 'English', selected: false}
        ],
        services: [
            {id: 1, name: 'CLEANING', selected: true},
            {id: 2, name: 'IRONING', selected: false},
            {id: 3, name: 'WACHING', selected: false}
        ],
        ratingMin: 0,
    };

    getServiceImage = (serviceName, selected) => {
        const height = 20;
        const width = 20;
        switch (serviceName) {
            case 'IRONING':
                return (<Ironing width={width} height={height} color={selected ? 'white' : color.primary} selected={selected}/>);
            case 'WACHING':
                return (<Waching width={width} height={height} color={selected ? 'white' : color.primary} selected={selected}/>);
            case 'CLEANING':
                return (<Cleaning width={width} height={height} color={selected ? 'white' : color.primary} selected={selected}/>);
        }
    };

    renderServices = () => {
        const {services} = this.state;

        return services.map(service => {
            const {id, name, selected} = service;
            return (<ServicesBox
                key={id}
                image={this.getServiceImage(name, selected)}
                text={name}
                selected={selected}
                onSelect={() => this.handleServiceSelection(id)}/>)
        });
    };
    renderLanguages = () => {
        const {languages} = this.state;

        return languages.map(lang => {
            const {code, name, selected} = lang;
            return (<LanguageBox
                key={code}
                text={name}
                selected={selected}
                onSelect={() => this.handleLanguageSelection(code)}/>)
        });
    }
    getRatingData = () => {
        return rating.map(rate => {
            return {value: rate.name};
        })
    }
    handleOnAddressChanged = (address) => {
        this.setState({address})
    }

    //HANDLERS
    handleOnPriceMinChanged = (priceMin) => {
        this.setState({priceMin})
    }
    handleOnPriceMaxChanged = (priceMax) => {
        this.setState({priceMax})
    }
    handleServiceSelection = (id) => {
        let services = this
            .state
            .services
            .slice();
        const index = services.findIndex(el => {
            return id === el.id;
        });

        services[index].selected = !services[index].selected;
        this.setState({services});
    };
    handleLanguageSelection = (code) => {
        let languages = this
            .state
            .languages
            .slice();
        const index = languages.findIndex(el => {
            return code === el.code;
        });

        languages[index].selected = !languages[index].selected;
        this.setState({languages});
    }
    handleOnFilter = () => {
        let criteria = {...this.state};
    }
    handleOnRatingChanged = (ratingMin) => {
        this.setState({ratingMin})
    }

    componentDidMount() {

        let languages = _.values(languagesData).map(lang => {
            return {
                ...lang,
                selected: false
            };
        });

        let services = _.values(servicesData).map(lang => {
            return {
                ...lang,
                selected: false
            };
        });

        //TODO ADD LANGUAGES AND SERVICES
        const lastFilter = {...this.props.filter};
        this.setState(lastFilter);
    }

    render() {
        const {address, priceMin, priceMax, ratingMin, ratingMax} = this.state;
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.whiteBox}>
                        <FormLabel labelStyle={styles.label}>Address</FormLabel>
                        <FormInput
                            containerStyle={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc'
                            }}
                            value={address}
                            onChangeText={this.handleOnAddressChanged}
                        />
                    </View>

                    <View style={styles.whiteBox}>
                        <View style={[styles.priceContainer, styles.row]}>

                            <View style={{
                                width: '50%'
                            }}>
                                <FormLabel labelStyle={styles.label}>Price min.</FormLabel>
                                <FormInput
                                    containerStyle={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#ccc'
                                    }}
                                    value={priceMin.toString()}
                                    keyboardType='numeric'
                                    onChangeText={this.handleOnPriceMinChanged}
                                />
                            </View>

                            <View style={{
                                width: '50%'
                            }}>
                                <FormLabel labelStyle={styles.label}>Price max.</FormLabel>
                                <FormInput
                                    containerStyle={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#ccc'
                                    }}
                                    value={priceMax.toString()}
                                    keyboardType='numeric'
                                    onChangeText={this.handleOnPriceMaxChanged}
                                />
                            </View>

                        </View>

                        <FormLabel labelStyle={styles.label}>Languages</FormLabel>
                        <View style={[styles.languagesContainer, styles.row]}>
                            {this.renderLanguages()}
                        </View>

                        <FormLabel labelStyle={styles.label}>Services</FormLabel>
                        <View style={[styles.servicesContainer, styles.row]}>
                            {this.renderServices()}
                        </View>

                        <FormLabel labelStyle={styles.label}>Rating</FormLabel>
                        <View style={styles.ratingContainer}>
                            <Rating
                                max={10}
                                rating={ratingMin}
                                handleOnRatingChanged={this.handleOnRatingChanged}
                                reversed={true}
                            />
                        </View>
                    </View>

                    <Button
                        onPress={this.handleOnFilter}
                        title="Filter"/>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({search}) => ({
    filter: {...search.filter}
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    row: {
        flexDirection: 'row'
    },
    priceContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: color.gray
    },
    languagesContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: color.gray
    },
    servicesContainer: {
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: color.gray
    },
    ratingContainer: {
        marginTop: 15,
        marginHorizontal: 22,
        flexDirection: 'row'
    },
    whiteBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        paddingBottom: 20
    },
    label: {
        color: color.gray_dark
    }
});