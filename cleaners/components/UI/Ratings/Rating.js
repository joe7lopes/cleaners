import React from 'react';
import { View } from 'react-native';
import StarRating from "react-native-star-rating";

export default function Rating (props) {
    let {
        max,
        rating,
        reversed
    } = props;

    max = max || 10;
    rating = rating || 0;

    return (
        <View>
            {
                reversed
                ? <StarRating
                        starSize={35}
                        disabled={false}
                        maxStars={10}
                        emptyStarColor='#FFDA44'
                        fullStarColor='#FFDA44'
                        fullStar={'star-o'}
                        emptyStar={'star'}
                        rating={rating - 1}
                        selectedStar={(rating) => props.handleOnRatingChanged(rating)}
                    />
                : <StarRating
                        starSize={35}
                        disabled={false}
                        maxStars={max}
                        emptyStarColor='#FFDA44'
                        fullStarColor='#FFDA44'
                        rating={rating}
                        selectedStar={(rating) => props.handleOnRatingChanged(rating)}
                    />
            }
        </View>
    )
}