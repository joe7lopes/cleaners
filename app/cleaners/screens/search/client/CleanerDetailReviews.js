import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ReviewCard from '../../../components/ReviewCard';

export default class CleanerDetailReviews extends React.Component {

  renderReviewCard = ({item}) => (
    <ReviewCard
    title={item.title}
    rating={item.rating}
    date={item.date}
    comment={item.comment}/>
  )

  render(){
    return(
      <View style={styles.container}>
       <FlatList
        data={this.props.reviews}
        renderItem={this.renderReviewCard}
        keyExtractor={(item) => item.uid.toString()}
    />
      </View>
    );
  }


}

const styles = StyleSheet.create({
container: {
  flex: 1
}
});