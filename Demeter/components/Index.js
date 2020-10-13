import 'react-native-gesture-handler';
import React, { useState, useEffect, ImageBackground } from 'react'
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

class Index extends React.Component {

  state = {
   
  }



  
 



  render() {

      return (
        <View style={styles.container} justifyContent='flex-start'>
          <StatusBar barStyle='light-content' />
          <View style={styles.loadingContainer}>
            <Text style={{ fontSize: 40, top: 7, fontWeight: 'bold',color:"#009900"  }}>Demeter</Text>
            <View style={styles.loadingModelContainer}>
              <Text style={styles.text}>Welcome to the helpful plant growing app!</Text>
              <Text style={styles.text}>Select a plant for care information and disease detection.</Text>
              
            </View> 
            
          </View>

          {/* <View style={styles.imageContainer}>
            <GetCoverImage plant= {"logo"}/>
          </View> */}
          
          <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <View style={{flexDirection:"column", alignItems:"center"}}>
          <TouchableOpacity
                style={styles.imageWrapper}
                onPress={() => {this.props.navigation.navigate('ImageInput')}}
              >

                {(
                  <Text>placeholder</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.choosetext} >Tomato</Text>
        </View>
            
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Apple</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Strawberry</Text>
              )}
            </TouchableOpacity>
            


          </View>
          <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Corn</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Potato</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Grape</Text>
              )}
            </TouchableOpacity>
            


          </View>
          <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Cherry</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Peach</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => {this.props.navigation.navigate('ImageInput')}}
            >

              {(
                <Text style={styles.choosetext} >Bell Pepper</Text>
              )}
            </TouchableOpacity>
            


          </View>

        </View>
      )



  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
    // backgroundColor: '#171f24',
    
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
    marginBottom: 10,
    
  },
  choosetext: {
    fontWeight: "bold",
    fontSize: 20
  },
  loadingModelContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    
  },
  imageWrapper: {
    width: 140,
    height: 140,
    padding: 10,
    borderRadius: 70,
    // borderStyle: 'dashed',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
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

export default connect(mapStateToProps)(Index);
