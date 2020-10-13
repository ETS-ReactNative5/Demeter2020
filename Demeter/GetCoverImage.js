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
        case ('Corn'):
            image = require('./assets/CornCover.jpg')
            break
        case ('Grape'):
            image = require('./assets/GrapeCover.jpg')
            break
        case ('Potato'):
            image = require('./assets/PotatoCover.jpg')
            break
        case ('Strawberry'):
            image = require('./assets/StrawberryCover.jpg')
            break
        case ('Peach'):
            image = require('./assets/PeachCover.jpg')
            break
        case ('PepperBell'):
            image = require('./assets/PepperBellCover.jpg')
            break
        case ('logo'):
            image = require('./assets/demeterlogo.jpg')
            break
    }
    switch (props.screen) {
        case ('Index'):
            return (<Image
                style={styles.Index}
                source={image}
            />)
        case ('PlantInfo'):
            return (<Image
                style={styles.PlantInfoScreen}
                source={image}
            />)
        case ('ImageInput'):
            return (<Image
                style={styles.PlantInfoScreen}
                source={image}
            />)
    }



}
export default GetCoverImage

export const styles = StyleSheet.create({
    PlantInfoScreen: {
        width: 325,
        height: 325,
        position: 'relative',
        marginTop: 10,
        marginBottom: 15,
        // left: 10,
        // bottom: 10,
        // right: 10,
    },
    Index: {
        width: 130,
        height: 130,
        position: 'relative',
        borderRadius: 70
    },
})