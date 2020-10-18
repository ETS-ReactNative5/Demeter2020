import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
StyleSheet} from 'react-native';

const TomatoClasses = {
    0: {
        name: 'Tomato Bacterial spot',
        description: <Text>
            <Text style = {{fontWeight: 'bold'}}>Causes</Text>{'\n'}
{'\n'}      Xanthomonas vesicatoria, X. euvesicatoria, X. gardneri, and X. perforans.
{'\n'}      Thrive in areas of high temperatures and humidity
{'\n'}{'\n'}<Text style = {{fontWeight: 'bold'}}>Symptoms</Text>{'\n'}
{'\n'}      Leaves have small brown circular spots surrounded by yellow halo
{'\n'}      Spots occur on green and red fruit but do not result in rot
{'\n'}{'\n'}<Text style = {{fontWeight: 'bold'}}>Management Strategies</Text>{'\n'}
{'\n'}      Avoid overhead watering
{'\n'}      Crop rotation in infested gardens
{'\n'}      Pesticides are available to protect tomatoes and pepper from bacterial spot 
{'\n'}      Disinfect pruners to limit spreading
{'\n'}      Bury or remove crop debris at the end of season
{'\n'}      Avoid high pressure sprays
{'\n'}      Purchase high quality, certified disease free seed if possible 
{'\n'} {'\n'} <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://extension.umn.edu/diseases/bacterial-spot-tomato-and-pepper#-resistant-varieties-1875510')}>
                        More information on Bacterial Spot
                        </Text>
            </Text>
            
        
        },
    1: {name: 'Tomato Late blight',
        description: ''},
    2: {name: 'Tomato mosaic virus',
        description: ''},
    3: {name: 'Tomato Target Spot',
    description: ''},
    4: {name: 'Tomato Leaf Mold',
    description: ''},
    5: {name: 'Tomato Yellow Leaf Curl Virus',
    description: ''},
    6: {name: 'Tomato Early blight',
        description: ''},
    7: {name: 'Tomato Spider mites',
    description: ''},
    8: {name: 'Tomato Septoria leaf spot',
        description: <Text>
        <Text style = {{fontWeight: 'bold'}}>Causes</Text>{'\n'}
{'\n'}      Septoria lycopersici fungus
{'\n'}      Severe in areas of persistent wet, humid weather

{'\n'}{'\n'}<Text style = {{fontWeight: 'bold'}}>Symptoms</Text>{'\n'}
{'\n'}      Tan, gray spots on the lower leaves

{'\n'}      If lesions are numerous, leaves turn yellow, then brown, and then wither
{'\n'}{'\n'}<Text style = {{fontWeight: 'bold'}}>Management Strategies</Text>{'\n'}
{'\n'}      Remove diseased leaves
{'\n'}      Improve air circulation
{'\n'}      Avoid overhead irrigation 
{'\n'}      Fungicidal sprays such as chlorothalonil
{'\n'} {'\n'} <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://extension.umn.edu/diseases/bacterial-spot-tomato-and-pepper#-resistant-varieties-1875510')}>
                    More information on Septoria Leaf Spot
                    </Text>
        </Text>},
    9: {name: 'Tomato healthy', description: ''}
}

const AppleClasses = {
    0: {name: 'Apple scab',description: ''},
    1: {name: 'Apple healthy',description: ''},
    2: {name: 'Apple Cedar apple rust',description: ''},
    3:  {name:  'Apple Black rot',description: ''},
}

const CherryClasses = {
    0: {name: 'Cherry Powdery mildew',description: ''},
    1: {name: 'Cherry healthy',description: ''},
}

const StrawberryClasses = {
    0: {name: 'Strawberry Leaf scorch',description: ''},
    1: {name: 'Strawberry healthy',description: ''},
}

const GrapeClasses = {
    0: {name: 'Grape Leaf blight (Isariopsis Leaf Spot)',description: ''},
    1: {name: 'Grape Esca (Black Measles)',description: ''},
    2: {name: 'Grape healthy',description: ''},
    3: {name: 'Grape Black rot', description: ''},
}

const PeachClasses ={
    0: {name: 'Peach Bacterial spot',description: ''},
    1: {name: 'Peach healthy', description: ''},
}

const CornClasses = {
    0: {name: 'Corn (maize) Northern Leaf Blight',description: ''},
    1: {name: 'Corn (maize) Cercospora leaf spot Gray leaf spot',description: ''},
    2: {name: 'Corn (maize) healthy',description: ''},
    3: {name: 'Corn (maize) Common rust ', description: ''},
}

const PotatoClasses = {
    0: {name: 'Potato healthy',description: ''},
    1: {name: 'Potato Late blight',description: ''},
    2: {name: 'Potato Early blight', description: ''},
}

const AllClasses = {
    'Tomato': TomatoClasses,
    'Apple': AppleClasses,
    'Cherry': CherryClasses,
    'Strawberry': StrawberryClasses,
    'Grape': GrapeClasses,
    'Peach': PeachClasses,
    'Corn': CornClasses,
    'Potato': PotatoClasses
}

export default AllClasses

export const styles = StyleSheet.create({
    SectionTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    SectionText: {
        fontSize: 15
    },
    SubText: {
        fontSize: 10,
        fontStyle: "italic",
    },
    Index: {
        width: 700,
        left: 15,
    }
})

// Class names from original data:
// const TomatoClasses = {
//     0: 'Tomato Bacterial spot',
//     1: 'Tomato Late blight',
//     2: 'Tomato Tomato mosaic virus',
//     3: 'Tomato Target Spot',
//     4: 'Tomato Leaf Mold',
//     5: 'Tomato Tomato Yellow Leaf Curl Virus',
//     6: 'Tomato Early blight',
//     7: 'Tomato Spider mites Two-spotted spider mite',
//     8: 'Tomato Septoria leaf spot',
//     9: 'Tomato healthy'
// }

// const AppleClasses = {
//     0: 'Apple Apple scab',
//     1: 'Apple healthy',
//     2: 'Apple Cedar apple rust',
//     3: 'Apple Black rot',
// }

// const CherryClasses = {
//     0: 'Cherry (including sour) Powdery mildew',
//     1: 'Cherry (including sour) healthy',
// }

// const StrawberryClasses = {
//     0: 'Strawberry Leaf scorch',
//     1: 'Strawberry healthy'
// }

// const GrapeClasses = {
//     0: 'Grape Leaf blight (Isariopsis Leaf Spot)',
//     1: 'Grape Esca (Black Measles)',
//     2: 'Grape healthy',
//     3: 'Grape Black rot'
// }

// const PeachClasses ={
//     0: 'Peach Bacterial spot',
//     1: 'Peach healthy'
// }

// const CornClasses = {
//     0: 'Corn (maize) Northern Leaf Blight',
//     1: 'Corn (maize) Cercospora leaf spot Gray leaf spot',
//     2: 'Corn (maize) healthy',
//     3: 'Corn (maize) Common rust '
// }

// const PotatoClasses = {
//     0: 'Potato healthy',
//     1: 'Potato Late blight',
//     2: 'Potato Early blight'
// }


