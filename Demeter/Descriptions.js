import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking,
} from 'react-native'
import * as tf from '@tensorflow/tfjs'

let Descriptions = (props) => {
    let image;

    switch (props.plant) {
        case ('Tomato'):
            return (
                <View style={styles.Index}>
                    {/* <Text style={styles.SectionText}> */}
                        <Text style={styles.SectionTitle}>Scientific Name:</Text><Text style={styles.SectionText}>Lycopersicum esculentum {'\n'}</Text>
                        <Text style={styles.SectionTitle}>Description:</Text><Text style={styles.SectionText}>The tomato plant can grow to 2.2 to 6.6 feet in height. It can be erect with short stems or vine-like with long, spreading stems.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Flower/Fruit Information:</Text><Text style={styles.SectionText}>The typical ripened tomato is red and round, but can be orange, yellow, and even purple, as well as coming in more cylinder or tube looking shapes.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Leaves:</Text><Text style={styles.SectionText}>Leaves are arranged spirally and can be around 20cm in length and 10cm in width.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Growing Conditions:</Text><Text style={styles.SectionText}>Tomatoes can be grown on almost any moderately well-drained soil type, and in warm areas. A good supply of organic matter can increase yield and reduce production problems.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Growing & Maintenance Tips:</Text><Text style={styles.SectionText}>Certified seeds and plants are recommended and should be used whenever possible. You can also purchase transplants from a reputable garden center. Use well-draining soil. Regularly water and maintain a mulch layer around the base.{'\n'}</Text>
                        <Text style={styles.SubText}>Information courtesy of HGIC, PlantVillage, ScienceDirect, and Burpee Seeds and Plants</Text>
                    {/* </Text>*/}
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://www.burpee.com/gardenadvicecenter/vegetables/tomatoes/tomato-tips/article10023.html')}>
                        More information
                    </Text>
                </View>
            )
        case ('Apple'):
            return (
                <View style={styles.Index}>
                        <Text style={styles.SectionTitle}>Scientific Name:</Text><Text style={styles.SectionText}>Malus domestica {'\n'}</Text>
                        <Text style={styles.SectionTitle}>Description:</Text><Text style={styles.SectionText}>The apple tree can grow to 5-10 feet tall, with a central trunk dividing into several branches.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Flower/Fruit Information:</Text><Text style={styles.SectionText}>Fruits are round in shape and range in color from green to red.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Leaves:</Text><Text style={styles.SectionText}>Leaves are oval in shape and can reach up to 13 cm in length and 7 cm in width.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Growing conditions:</Text><Text style={styles.SectionText}>Apple trees are grown best in sunny, tropical conditions but can be grown well in a wide range of soil types from sandy loam to sandy clay loam, as long as it is not poorly drained.{'\n'}</Text>
                        <Text style={styles.SectionTitle}>Growing & Maintenance Tips:</Text><Text style={styles.SectionText}>From birth, apple trees can take 6-10 years to mature, but if purchasing apple trees, it is best to look for healthy 1-2 year recommended cultivars from a reliable source. When watering, ensure the water soaks the soil thoroughly. Pruning will help avoid poor growth and delayed fruiting.{'\n'}</Text>
                        <Text style={styles.SubText}>Information courtesy of HGIC, PlantVillage, ScienceDirect, and UCANR</Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://plantvillage.psu.edu/topics/apple/infos/diseases_and_pests_description_uses_propagation')}>
                        More information and tips
                        </Text>
                </View>
            )
        case ('Grape'):
            return (
                <View style={styles.Index}>
                    <Text style={styles.SectionTitle}>Scientific Name:</Text><Text style={styles.SectionText}>Vitis vinifera{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Description:</Text><Text style={styles.SectionText}>The grapevine is a woody long stemmed vine producing high value grapes. These can grow past 30m and live for many years.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Flower/Fruit Information:</Text><Text style={styles.SectionText}>The fruit is a grape berry growing in clusters. The grapes can be 3 cm long and green, red, or purple.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Leaves:</Text><Text style={styles.SectionText}>Leaves are alternately arranged to the stem and can grow to 5-20 cm in size.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Growing Conditions:</Text><Text style={styles.SectionText}>Grapevines will grow best in hot, dry regions. Vines should be grown in the full sun, in well draining soil (avoid low lying areas). They are usually be planted as dormant bare root vines in spring. It is recommended to wait until after the danger of frost has passed.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Growing & Maintenance Tips:</Text><Text style={styles.SectionText}>Grapevines can be purchased from nurseries. The best grapevines to plant are 1 year olds. When watering, make sure the root zone is thoroughly soaked. Prune annually to encourage healthy growth. Much sunlight and circulating air will help reduce incidence of disease.{'\n'}</Text>
                    <Text style={styles.SubText}>Information courtesy of HGIC, PlantVillage, ScienceDirect, and UCANR</Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://hgic.clemson.edu/factsheet/bunch-grapes/  ')}>
                        More information and tips
                            </Text>
                </View>
            )
        case ('Corn'):
            return (
                <View style={styles.Index}>

                    <Text style={styles.SectionTitle}>Scientific Name:</Text><Text style={styles.SectionText}>Zea mays{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Description:</Text><Text style={styles.SectionText}>Maize (corn) is a staple food crop grown all over the world, possessing a simple stem of nodes and internodes.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Flower/Fruit information:</Text><Text style={styles.SectionText}>The fruit of the plant is an ear of corn around 6.5 inches in length.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Leaves:</Text><Text style={styles.SectionText}>In a typical maize crop, each ear of corn with leaves projects outward from the central stalk while the tassel/silks projects out the top of the stalk.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Growing Conditions:</Text><Text style={styles.SectionText}>Maize is grown in warm, tropical, and sub-tropical regions with warm soils. Soil should be of high quality, deep, fertile, and well draining. It should be planted where it receives full sunlight and ample moisture.{'\n'}</Text>
                    <Text style={styles.SectionTitle}>Growing & Maintenance Tips:</Text><Text style={styles.SectionText}>Sow seeds around 1 in deep and 10-15 cm apart in rows. Maize plants should be provided adequate nutrients through fertilizer. There may be nutrient deficiency if the plants’ leaves are not deep green. There should be adequate soil moisture obtained by applying water through a soaker hose.{'\n'}</Text>
                    <Text style={styles.SubText}>Information courtesy of HGIC, PlantVillage, ScienceDirect, and UCANR</Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://hgic.clemson.edu/factsheet/bunch-grapes/  ')}>
                        More information and tips
                                </Text>
                </View>
            )

        default:
            return (<Text style={styles.SectionText}>Descriptions coming soon!</Text>)
    }

}
export default Descriptions

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