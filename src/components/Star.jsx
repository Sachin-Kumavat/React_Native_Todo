import { View, Text } from 'react-native'
import React from 'react';
import { AirbnbRating, Rating } from 'react-native-ratings';

const Star = ({ startingValue }) => {


    return (
        <View>
            {/* <AirbnbRating
                reviews={["Poor", "Very Bad", "Bad", "Ok", "Good", "Excellent"]}
                count={6}
                defaultRating={3}
                reviewColor='orange'
                reviewSize={10}
                showRating={true}
                // isDisabled
                starContainerStyle={{backgroundColor: "grey"}}
                // imageSize={10}
            /> */}
            <Rating
                type='star'
                ratingCount={5}
                readonly
                fractions={1}
                jumpValue={0.1}
                onStartRating={rating => console.log("Initial Rating", rating)}
                onFinishRating={rating => console.log("Rating Finished", rating)}
                onSwipeRating={rating => console.log("swipe", rating)}
                imageSize={20}
                startingValue={startingValue}

            />

        </View>
    )
}

export default Star;
