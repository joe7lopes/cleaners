import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../../actions';
import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal, Platform} from 'react-native';
import SearchFilter from './SearchFilter';
import CleanerCard from '../../../components/CleanerCard';
import {PENDING, SUCCESS} from '../../../actions/types';

class Search extends React.Component {

  state = {
    cleaners: [],
    isFilterVisible: false,
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


    renderFilter = () => {

      return (
          <Modal 
            transparent={true}>
            <View style={styles.searchModal}>
              <SearchFilter onClose={this.handleOnFilterClose}/>
            </View>
          </Modal>
      )
    }

    //HANDLERS
    handleSelectedCleaner(cleaner){
      const title = cleaner.firstName || '';
      this.props.navigation.navigate('cleanerDetail', {cleaner, title});
    }

    hadleFilterTap = () => {
      this.setState({isFilterVisible: true});
    }

    handleOnFilterClose = () => {
      this.setState({isFilterVisible: false});
    }

  render() {
      const count = this.props.cleaners.length;
      const { isFilterVisible } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {isFilterVisible && this.renderFilter()}
        <View style={styles.header}>
        <TouchableWithoutFeedback onPress={this.hadleFilterTap}>
          <View style={styles.searchBar}>
            <Text>filter</Text>
          </View>
          </TouchableWithoutFeedback>
        </View >

        <View style={styles.body}>
          <Text style={styles.resultCount}>{`(${count} results)`}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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
    backgroundColor: 'white',
    shadowOffset:{  width: 0.5,  height: 1,  },
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowRadius: 0.5
  },
  resultCount:{
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'pink'
  },
  searchModal: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 54,
    backgroundColor: 'white'
  }
});
