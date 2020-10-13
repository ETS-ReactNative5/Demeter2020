import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import * as tf from '@tensorflow/tfjs'
// require('@tensorflow/tfjs-node')
import { fetch, bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as jpeg from 'jpeg-js'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios'
import { connect } from "react-redux";

import GetCoverImage from "../GetCoverImage"
import AllClasses from "../classes.js"


const CONFIG = {
  allowsEditing: true,
  aspect: [1, 1]
};

// const IMAGENET_CLASSES = {
//   0: 'Tomato___Bacterial_spot',
//   1: 'Tomato___Late_blight',
//   2: 'Tomato___Tomato_mosaic_virus',
//   3: 'Tomato___Target_Spot',
//   4: 'Tomato___Leaf_Mold',
//   5: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
//   6: 'Tomato___Early_blight',
//   7: 'Tomato___Spider_mites Two-spotted_spider_mite',
//   8: 'Tomato___Septoria_leaf_spot',
//   9: 'Tomato___healthy'
// }

class PlantInfo extends React.Component {

  state = {
  }




  render() {

    return (
      <View style={styles.container} justifyContent='flex-start'>
        <StatusBar barStyle='light-content' />
        <View style={styles.loadingContainer}>
          <Text style={{ fontSize: 40, top: 7, fontWeight: 'bold', }}>{this.props.model}</Text>
        </View>

        <View style={styles.imageContainer}>
          <GetCoverImage plant={this.props.model} screen="PlantInfo" />
        </View>
        <View>

          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={() => this.props.navigation.navigate("ImageInput", {})}
          >
            {(
              <Text style={styles.choosetext}>Identify Diseases</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles2.ismageWrapper}
            onPress={() => { this.props.navigation.navigate("Index") }}>
            {/* was originally styles.choosetext */}
            <Text style={{ color: '#009900', fontWeight: 'bold', fontSize: 20 }}>{"\nBack"} </Text>
          </TouchableOpacity>
        </View>

        {/* <Text>{predictions}</Text>       */}

      </View>

    )



  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
    // backgroundColor: '#171f24',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingImg: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // color: '#ffffff',
    fontSize: 20,
    top: 20,
    marginBottom: 40,

  },
  choosetext: {
    fontWeight: "bold",
    color: '#ffffff',
    fontSize: 20
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageWrapper: {
    width: 325,
    height: 80,
    padding: 10,
    borderRadius: 10,
    // borderStyle: 'dashed',
    marginTop: 40,
    backgroundColor: '#009900',
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapperDisabled: {
    width: 250,
    height: 60,
    padding: 10,
    borderRadius: 5,
    // borderStyle: 'dashed',
    marginTop: 20,
    backgroundColor: '#949399',
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 325,
    height: 325,
    position: 'relative',
    marginTop: 10,
    marginBottom: 15,
    // top: 10,
    // left: 10,
    // bottom: 10,
    // right: 10,
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  // transparentText: {
  //   color: '#ffffff',
  //   opacity: 0.7
  // },
  footer: {
    marginTop: 40
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6
  },
  tfLogo: {
    width: 125,
    height: 70
  }
})

function mapStateToProps(state) {
  return {
    // becomes the props for this component via connect()
    diagnoses: state.diagnoses,
    model: state.model
    // sometimes you can just pass the whole state through but its better to filter
  };
}

export default connect(mapStateToProps)(PlantInfo);
// export default ImageInput

// import React, {useState, useEffect} from 'react';
// import { StyleSheet, Text, View, Picker, FlatList,Image,Button, TouchableHighlight, ActivityIndicator,
//   StatusBar,
//   TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// import * as tf from '@tensorflow/tfjs'
// import { fetch } from '@tensorflow/tfjs-react-native'
// import * as mobilenet from '@tensorflow-models/mobilenet'
// import * as jpeg from 'jpeg-js'
// import Constants from 'expo-constants'

// export default function ImageInput(props) {

//   const [uri, setUri] = useState(null);
//   const [image, setImage] = useState(null)
//   const [predictions, setPredictions] = useState(null)
//   const [isModelReady, setisModelReady] = useState(false)
//   // state = {
//   //   isTfReady: false,
//   //   isModelReady: false,
//   //   predictions: null,
//   //   image: null
//   // }

//   const CONFIG = {
//     allowsEditing: true,
//     aspect: [4,3]
//   };

//   const componentDidMount = async () => {
//     await tf.ready()
//     setisModelReady(false)
//     this.model = await mobilenet.load()
//     setisModelReady(true)
//     this.getPermissionAsync()
//   }

//   const imageToTensor = (rawImageData) => {
//     const TO_UINT8ARRAY = true
//     const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
//     // Drop the alpha channel info for mobilenet
//     const buffer = new Uint8Array(width * height * 3)
//     let offset = 0 // offset into original data
//     for (let i = 0; i < buffer.length; i += 3) {
//       buffer[i] = data[offset]
//       buffer[i + 1] = data[offset + 1]
//       buffer[i + 2] = data[offset + 2]

//       offset += 4
//     }

//     return tf.tensor3d(buffer, [height, width, 3])
//   }

//   const classifyImage = async () => {
//     try {
//       const imageAssetPath = Image.resolveAssetSource(image)
//       const response = await fetch(imageAssetPath.uri, {}, { isBinary: true })
//       const rawImageData = await response.arrayBuffer()
//       const imageTensor = this.imageToTensor(rawImageData)
//       const new_predictions = await this.model.classify(imageTensor)
//       setPredictions(new_predictions)
//       console.log(predictions)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const renderPrediction = prediction => {
//     return (
//       <Text key={prediction.className}>
//         {prediction.className}
//       </Text>
//     )
//   }
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     (
//       async () => {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA);
//       // setHasPermission(status === 'granted');

//     }
//   )();
//   (
//     async () => {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     // setHasPermission(status === 'granted');

//   }
//   )();
//   }, []);

//   const openCamera = async () => { const resp = await ImagePicker.launchCameraAsync(CONFIG);
//     if (resp) {
//       console.log(resp.uri);
//         setUri(resp.uri);
//     }
//   };

//   const openCameraRoll = async () => {
//     const resp = await ImagePicker.launchImageLibraryAsync(CONFIG);
//     if (resp){
//       setUri(resp.uri);
//     }
//   };








//   //hey

//   return (
//       <View>
//         <Image style  = {{width:65, height: 65, margin: 50, padding: 50}} source = {require('../assets/tomatoicon.png')}/>
//         <Text  style={{textAlignVertical: "center",textAlign: "center",fontWeight:"bold",fontSize:50,}}>Tomato</Text>
//         <TouchableHighlight
//             // title="Upload Image"
//             style = {styles.button}
//               onPress={openCameraRoll}
//         >
//             <Text>Upload Image</Text>
//         </TouchableHighlight>

//         <TouchableHighlight
//             // title="Upload Image"
//             style = {styles.button}
//               onPress={openCamera}
//         >
//             <Text>Take Photo</Text>
//         </TouchableHighlight>
//         <Text>{uri}</Text>

//   { uri && <Image style  = {{width:200, height: 200, margin: 50, padding: 50}} source = {{ uri: uri}}/> }
//         {/* displaying image if uri exists, src weirdly takes an object of the uri*/}


//         <View>
//       {isModelReady && image && (
//         <Text>
//           Predictions: {predictions ? '' : 'Predicting...'}
//         </Text>
//       )}
//       {isModelReady &&
//         predictions &&
//         predictions.map(p => renderPrediction(p))}
//       </View>


//       </View>


//     );
// }




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingHorizontal: 10
//     },
//     button: {
//       alignItems: 'center',
//       backgroundColor: '#DDDDDD',
//       padding: 10
//     },
//     countContainer: {
//       alignItems: 'center',
//       padding: 10
//     },
//     countText: {
//       color: '#FF00FF'
//     }
//   })
