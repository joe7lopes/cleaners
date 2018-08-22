import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../../actions';
import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CleanerCard from '../../../components/CleanerCard';
import {PENDING, SUCCESS} from '../../../actions/types';

class SearchCleaner extends React.Component {

  state = {
    cleaners: []
  }

  componentDidMount() {
    this
      .props
      .fetchCleaners();
  }

  renderSearchResults = () => {
    const {cleaners, status} = this.props;
    if (status === PENDING) {
      return this.renderSearching();
    } else if (cleaners.length <= 0) {
      return this.renderNoSearchResults()
    } else if (status === SUCCESS) {
      return this.renderCleanersList();
    }
  }

  renderSearching = () => (
    <View style={styles.statusContainer}>
      <Text>Searching...</Text>
    </View>
  )

  renderNoSearchResults = () => (
    <View style={styles.statusContainer}>
      <Text>No results found</Text>
    </View>
  )

  renderCleanersList = () => (
    <FlatList
        data={this.props.cleaners}
        renderItem={this.renderCard}
        keyExtractor={(item, index) => item.id.toString()}
    />
  )

  renderCard = ({item}) => (
  <TouchableOpacity onPress={()=>this.handleSelectedCleaner(item)}>
  <CleanerCard
    key={item.id}
    style={styles.cleanerCard}
    firstName={item.firstName}
    lastName={item.lastName}
    phone={item.phone}
    services={item.services}
    languages={item.languages}
    rating={item.rating}
    price={item.price}
    />
    </TouchableOpacity>)

    //HANDLERS
    handleSelectedCleaner(cleaner){
      console.log(cleaner);
    }


  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.header}></View >
        <View style={styles.body}>
          {this.renderSearchResults()}
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {cleaners: state.search.cleaners, status: state.search.status}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCleaner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    backgroundColor: 'red'

  },
  body: {
    height: '80%',
    marginHorizontal: 20,
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cleanerCard: {
    marginTop: 20,
    backgroundColor: 'white'
  }

})