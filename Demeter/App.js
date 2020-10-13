import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from "redux";
import { Provider } from "react-redux";


// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Camera style={{ flex: 1 }} type={type}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             flexDirection: 'row',
//           }}>
//           <TouchableOpacity
//             style={{
//               flex: 0.1,
//               alignSelf: 'flex-end',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectScreen from './components/SelectScreen'
import ImageInput from './components/ImageInput'
import Index from './components/Index'
import ImageOutput from './components/ImageOutput'
import CameraRollPicker from 'react-native-camera-roll-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import History from './components/History'

// import CameraRoll from './components/CameraRoll'
// import { RNCamera } from 'react-native-camera';
// import { Camera } from 'expo-camera';


const initialState = {
  diagnoses: [],
  model: ''
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "ADDDIAG":
      return {
        ...state,
        diagnoses: [...state.diagnoses, action.diagnosis]
      };
    case "CHANGEMODEL":
      return {
        ...state,
        model: action.model
      }
    default:
      return state;
  }
}
const store = createStore(reducer);
 

// store.dispatch({type: 'ADDDIAG', uri: 'baller1'})
// store.dispatch({type: 'ADDDIAG', uri: 'baller2'})
store.dispatch({ type: 'CHANGEMODEL', model: 'Tomato' })

function App() {
  const [selectedModel, setSelectedModel] = useState(null)
  const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  return (

    <View style={styles.container} justifyContent='center'>
      {/* {selectedModel} */}
      <ImageOutput uri="https://d384u2mq2suvbq.cloudfront.net/public/spree/products/1594/jumbo/Tomato-Leaf-Fragrance-Oil.jpg?1529607054" />


    </View>
  );
}
const MainStack = createStackNavigator();
export default function MainStackScreen() {

  return (
    <Provider store={store}>
        <NavigationContainer >
          <MainStack.Navigator initialRouteName="Index">
            <MainStack.Screen name="ImageInput" component={ImageInput} options={{ headerShown: false, plant: 'Tomato' }} />
            <MainStack.Screen name="ImageOutput" component={ImageOutput} options={{ headerShown: false }} />
            <MainStack.Screen name="History" component={History} options={{ headerShown: false }} />
            <MainStack.Screen name="Index" component={Index} options={{ headerShown: false}}/>

          </MainStack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
