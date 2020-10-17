import {Stylesheet,Text,
    View,} from 'react-native';

const TomatoClasses = {
    0: {
        name: 'Tomato Bacterial spot',
        description:<View><Image require = {require('./assets/DiseaseDescs/Tomato Bacterial Spot.png')}/></View>
        },
    1: {name: 'Tomato Late blight',
        description: <View><Image require = {require('./assets/DiseaseDescs/Tomato Late Blight.png')}/></View>},
    2: {name: 'Tomato mosaic virus',
        description:<></>},
    3: {name: 'Tomato Target Spot',
    description:<></>},
    4: {name: 'Tomato Leaf Mold',
    description:<></>},
    5: {name: 'Tomato Yellow Leaf Curl Virus',
    description:<></>},
    6: {name: 'Tomato Early blight',
        description: <View><Image require = {require('./assets/DiseaseDescs/Tomato Late Blight.png')}/></View>},
    7: {name: 'Tomato Spider mites',
    description:<></>},
    8: {name: 'Tomato Septoria leaf spot',
        description: <View><Image require = {require('./assets/DiseaseDescs/Tomato Septoria Leaf Spot.png')}/></View>},
    9: {name: 'Tomato healthy', description:<></>}
}

const AppleClasses = {
    0: {name: 'Apple scab',description:<></>},
    1: {name: 'Apple healthy',description:<></>},
    2: {name: 'Apple Cedar apple rust',description:<></>},
    3:  {name:  'Apple Black rot',description:<></>},
}

const CherryClasses = {
    0: {name: 'Cherry Powdery mildew',description:<></>},
    1: {name: 'Cherry healthy',description:<></>},
}

const StrawberryClasses = {
    0: {name: 'Strawberry Leaf scorch',description:<></>},
    1: {name: 'Strawberry healthy',description:<></>},
}

const GrapeClasses = {
    0: {name: 'Grape Leaf blight (Isariopsis Leaf Spot)',description:<></>},
    1: {name: 'Grape Esca (Black Measles)',description:<></>},
    2: {name: 'Grape healthy',description:<></>},
    3: {name: 'Grape Black rot', description:<></>},
}

const PeachClasses ={
    0: {name: 'Peach Bacterial spot',description:<></>},
    1: {name: 'Peach healthy', description:<></>},
}

const CornClasses = {
    0: {name: 'Corn (maize) Northern Leaf Blight',description:<></>},
    1: {name: 'Corn (maize) Cercospora leaf spot Gray leaf spot',description:<></>},
    2: {name: 'Corn (maize) healthy',description:<></>},
    3: {name: 'Corn (maize) Common rust ', description:<></>},
}

const PotatoClasses = {
    0: {name: 'Potato healthy',description:<></>},
    1: {name: 'Potato Late blight',description:<></>},
    2: {name: 'Potato Early blight', description:<></>},
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


