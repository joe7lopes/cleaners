import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../actions';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {FormLabel, FormInput, Icon, Button} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import {LanguageBox, ServicesBox} from '../../../components/UI';
import {languages as languagesData, services as servicesData, rating} from '../../../config/data';

class SearchFilter extends React.Component {

  state = {
    address: undefined,
    priceMin: undefined,
    priceMax: undefined,
    languages: [],
    services: [],
    ratingMin: undefined,
    ratingMax: undefined
  }

  componentDidMount() {
    let languages = languagesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    let services = servicesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });

    this.setState({languages, services});
  }

  renderServices = () => {
    const {services} = this.state;

    return services.map(service => {
      const {id, name, selected} = service;
      return (<ServicesBox
        style={{
        marginLeft: 8
      }}
        key={id}
        text={name}
        selected
        ={selected}
        onSelect={() => this.handleServiceSelection(id)}/>)
    });
  };

  renderLanguages = () => {
    const {languages} = this.state;

    return languages.map(lang => {
      const {code, name, selected} = lang;
      return (<LanguageBox
        style={{
        marginLeft: 8
      }}
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

  //HANDLERS

  handleOnaddressChanged = (address) => {
    this.setState({address})
  }

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
    const languages = this.state.languages
      .filter(lang => lang.selected === true)
      .map(lang => ({code: lang.code}));

    const services = this.state.services
    .filter(service => service.selected === true)
    .map(service => ({id: service.id}));

    var criteria = Object.assign({},this.state);
    criteria.languages = languages;
    criteria.services = services;
    console.log('criteria', criteria);
    this.props.fetchCleaners(criteria);
    this.props.onClose();
  }

  handleOnRatingMinChanged = (ratingMin) => {
    this.setState({ratingMin});
  }

  handleOnRatingMaxChanged = (ratingMax) => {
   this.setState({ratingMax})
  }

  render() {
    const { address, priceMin, priceMax, ratingMin, ratingMax } = this.props;
    return (
      <View style={styles.container}>

        <TouchableOpacity 
        style={{
          alignItems: 'flex-end'
        }}
        onPress={this.props.onClose}
        >
          <Icon name='cancel' color='#d3d3d3'/>
        </TouchableOpacity>

        <FormLabel>Address</FormLabel>
        <FormInput value={address} onChangeText={this.handleOnaddressChanged}/>

        <View style={styles.row}>

          <View>
            <FormLabel>price min.</FormLabel>
            <TextInput
              style={{
              paddingLeft: 20
            }}
              multiline={false}
              maxLength={3}
              value={priceMin}
              placeholder="not set"
              onChangeText={this.handleOnPriceMinChanged}/>
          </View>

          <View>
            <FormLabel>price max.</FormLabel>
            <TextInput
              style={{
              paddingLeft: 20
            }}
              multiline={false}
              maxLength={3}
              value={priceMax}
              placeholder="not set"
              onChangeText={this.handleOnPriceMaxChanged}/>
          </View>

        </View>

        <FormLabel>Languages</FormLabel>
        <View style={[styles.languagesContainer, styles.row]}>
          {this.renderLanguages()}
        </View>

        <FormLabel>Services</FormLabel>
        <View style={[styles.languagesContainer, styles.row]}>
          {this.renderServices()}
        </View>
          <View style={ styles.ratingContainer}>
            <Dropdown containerStyle={{width: '45%'}} label="rating min." value={ratingMin} data={this.getRatingData()} onChangeText={this.handleOnRatingMinChanged} />
            <Dropdown containerStyle={{width: '45%', marginLeft: '10%'}} label="rating max." value={ratingMax} data={this.getRatingData()} onChangeText={this.handleOnRatingMaxChanged}/>
          </View>
          <Button style={{paddingTop: 20}}title="filter" onPress={this.handleOnFilter}/>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    address: state.search.filter.address,
    priceMin: state.search.filter.priceMin,
    priceMax: state.search.filter.priceMax,
    languages: state.search.filter.languages,
    services: state.search.filter.services,
    ratingMin: state.search.filter.ratingMin,
    ratingMax: state.search.filter.ratingMax,
  }
}

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
  languagesContainer: {
    paddingTop: 20,
    paddingLeft: 20
  },
  servicesContainer: {
    paddingTop: 20,
    paddingLeft: 20
  },
  ratingContainer: {
    flexDirection: 'row',
  }
});