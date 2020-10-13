import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import * as tf from '@tensorflow/tfjs'

let GetCoverImage = (props) => {
    let image;
    switch (props.plant) {
        case ('Tomato'):
            image = require('./assets/TomatoCover.jpeg')
            break
        case ('Apple'):
            image = require('./assets/AppleCover.jpg')
            break
        case ('Cherry'):
            image = require('./assets/CherryCover.jpg')
            break
        case ('logo'):
            image = require('./assets/demeterlogo.jpg')
            break
    }
    return (<Image
        style={
            styles.imageContainer
        }
        source={image}
    />)


}
export default GetCoverImage

export const styles = StyleSheet.create({
    imageContainer: {
        width: 325,
        height: 325,
        position: 'relative',
        marginTop: 10,
        marginBottom: 15,
        // left: 10,
        // bottom: 10,
        // right: 10,
    },
})