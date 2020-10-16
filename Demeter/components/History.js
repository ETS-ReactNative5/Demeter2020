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
        const { route, navigation } = this.props;
        const { plant } = route.params;
        let items = []
        console.log('Getting history for:', plant)
        for (let i in this.props.diagnoses) {
            if (plant !== this.props.diagnoses[i].plant && plant !== 'all') {
                continue
            }
            items.push(
                <View key={i} styles={styles.container}>
                    <Image source={{ uri: this.props.diagnoses[i].uri }} style={{
                        width: 400,
                        height: 400,
                        position: 'relative',
                        marginTop: 10,
                        marginBottom: 15,
                        // top: 10,
                        // left: 10,
                        // bottom: 10,
                        // right: 10,
                    }} />
                        <View style ={{width: 400, flexDirection: 'row'}}><Text style={{ fontSize: 20, fontWeight: "bold" }}>Plant: </Text><Text style = {{fontSize: 20, }}>{this.props.diagnoses[i].plant}</Text></View>
                        <View style ={{width: 400, flexDirection: 'row'}}><Text style={{ fontSize: 20, fontWeight: "bold" }}>Diagnosis: </Text><Text style = {{fontSize: 20, }}>{this.props.diagnoses[i].diag}</Text></View>

                </View>)


        }
        return items
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 40, margin: 60, fontWeight: 'bold', }}>Previous Diagnoses</Text>
                <ScrollView>{this.renderList()}</ScrollView>

                <TouchableOpacity
                    // style={styles2.ismageWrapper}
                    onPress={() => { this.props.navigation.goBack() }}>
                    {/* was originally styles.choosetext */}
                    <Text style={{ color: '#009900', fontWeight: 'bold', fontSize: 20 }}>{"\nBack"} </Text>
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
        // justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
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
