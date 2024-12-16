import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        <ScrollView>
            <View style={styles.cardHolder}>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardHeader}>Food Card</Text>
                    <View>
                        <Image style={styles.imgStyle} source={{ uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
                    </View>
                    <View style={styles.food_info}>
                        <Text style={styles.food_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.nesciunt eaque!</Text>
                    </View>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyText}>Buy</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardHeader}>Food Card</Text>
                    <View>
                        <Image style={styles.imgStyle} source={{ uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
                    </View>
                    <View style={styles.food_info}>
                        <Text style={styles.food_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.nesciunt eaque!</Text>
                    </View>
                    <TouchableOpacity style={styles.buyButton}
                        onPress={() => Linking.openURL("https://www.netflix.com/browse")}
                    >
                        <Text style={styles.buyText}>Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardHolder: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        width: "80%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        boxShadow: "5 5 5 #E2DFD2",
        borderColor: "#E2DFD2",
        marginVertical: 10
    },
    cardHeader: {
        fontSize: 25,
        marginBottom: 20
    },
    imgStyle: {
        width: 280,
        height: 200,
        borderRadius: 20
    },
    food_info: {
        marginVertical: 10,
        alignItems: "center"
    },
    food_title: {
        fontSize: 20,
        marginBottom: 10,
        color: "#6d716b"
    },
    buyButton: {
        width: "30%",
        display: "flex",
        backgroundColor: "#44d61d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        paddingVertical: 8,
    },
    buyText: {
        color: "white",
        fontSize: 22
    }
})