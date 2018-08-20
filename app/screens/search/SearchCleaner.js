import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SearchField } from '../../components/fields'
import CleanerCard from './CleanerCard';

export default class SearchCleaner extends React.Component {

  state = {
    cleaners: [
      {id:1, firstName:'joanna', lastName:'Sadek', price:20, rating: 9, services:['cleaning', 'ironing']},
      {id:2, firstName:'Anna', lastName:'Katzmarek', price:30, rating: 5, services:['ironing'], languages: ['EN', 'PL', 'ES']}
    ],
    filters: [
      {name: 'location'},
      {name: 'rating'},
      {name: 'services'},
      {name: 'Language'},
      {name: 'price'},
    ]
  }

  _keyExtractor = (item, index) => item.id.toString();

  onPressItem = (item) => {
    this.props.navigation.navigate('CleanerDetail');
  }

  render(){
    const { cleaners, filters } = this.state;

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topFilterContainer}>
            <SearchField filters={filters}/>
          </View>
          <View style={styles.cleanersListContainer}>
            <FlatList
              data={cleaners}
              keyExtractor={this._keyExtractor}
              renderItem={({item})=>
                <TouchableOpacity  style={styles.item} onPress={()=> this.onPressItem(item)}>
                    <CleanerCard 
                      firstName={item.firstName}
                      lastName={item.lastName}
                      price={item.price}
                      rating={item.rating}
                      services={item.services}
                      languages={item.languages}
                    />
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topFilterContainer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#cecece'
  },
  cleanersListContainer: {
    flex: 1,
  },
  item: {
    padding: 8
  }
})

