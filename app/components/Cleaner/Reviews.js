import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ReviewCard from './ReviewCard';

class Reviews extends React.Component {

  state = {
    reviews:[
      {id: 1, name:'richard', date: Date(), text:"very good", rating:7},
      {id: 2, name:'Anna', date: Date(), text:"worstasdasdasdasdasdasdasdasdasd", rating:2},
      {id: 3, name:'Amadeu', date: Date(), text:"excellent", rating:9},
      {id: 4, name:'Junior', date: Date(), text:"very good indeeed uncle bob", rating:8},
      {id: 5, name:'hulk', date: Date(), text:"could be better", rating:4},
      {id: 6, name:'hulk', date: Date(), text:"could be better", rating:4},
      {id: 7, name:'hulk', date: Date(), text:"could be better", rating:4}
    ]
  };

  _keyExtractor = (item, index) => item.id.toString();

  render(){
    const {reviews} = this.state;
    return(
      <View style={styles.container}>
      <FlatList
        data={reviews}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => 
          <ReviewCard
            name={item.name}
            date={item.date}
            text={item.text}
            rating={item.rating}
          />}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignSelf: 'stretch'
  }
});

export default Reviews;