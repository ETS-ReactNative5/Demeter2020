import { connect } from "react-redux";
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

class History extends React.Component {

    state = {
        showDisplay: true,
        isTfReady: false,
        isModelReady: false,
        predictions: null,
        image: null,
        uri: null
    }

    renderList = () => {
        let items = []
        for (let i in this.props.diagnoses) {
                items.push(<View key = {i}>
                <Image source={{ uri: this.props.diagnoses[i].uri }} style={{
                    width: 325,
                    height: 185,
                    position: 'relative',
                    marginTop: 10,
                    marginBottom: 15,
                    // top: 10,
                    // left: 10,
                    // bottom: 10,
                    // right: 10,
                }} />
                <Text>Plant: {this.props.diagnoses[i].plant}</Text>
                <Text>Diagnosis: {this.props.diagnoses[i].diag}</Text>
                </View>)
        
        }
        return items
    }

    render() {
        return (
            <View >
                {this.renderList()}

                <TouchableOpacity
                    // style={styles2.ismageWrapper}
                    onPress={() => { this.props.navigation.navigate("ImageInput") }}>
                    {/* was originally styles.choosetext */}
                    <Text style={{ color: '#009900', fontWeight: 'bold', fontSize: 20 }}>{"\n< Back"} </Text>
                </TouchableOpacity>
            </View>
        )


    }
}

function mapStateToProps(state) {
    return {
        // becomes the props for this component via connect()
        diagnoses: state.diagnoses
        // sometimes you can just pass the whole state through but its better to filter
    };
}

export default connect(mapStateToProps)(History);


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
        fontFamily: 'Arial',
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
