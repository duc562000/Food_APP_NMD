import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import R from '../../assets/R';


const StarReview = ({ rate,hide }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={R.images.imgStarFull}
                resizeMode="cover"
                style={{
                    width: 15,
                    height: 15,
                    tintColor:R.colors.colorMain,
                    marginHorizontal:3
                }}
            />
        )
    }

    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={R.images.imgStarHalf}
                resizeMode="cover"
                style={{
                    width: 15,
                    height: 15,
                    tintColor:R.colors.colorMain,
                    marginHorizontal:3
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={R.images.imgStarEmpty}
                resizeMode="cover"
                style={{
                    width: 15,
                    height: 15,
                    marginHorizontal:3
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            {starComponents}
            {hide ? null : (
                <Text style={{ 
                    marginLeft: 8,
                    fontSize:13,
                    color:R.colors.color777
                    }}>({rate})</Text>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default StarReview;