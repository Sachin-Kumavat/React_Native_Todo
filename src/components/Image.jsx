import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Images = () => {
    console.log("fvfvvfve");

    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>This is image view</Text>
            <View>
                <Image style={styles.imageStyle} source={require("../../assets/varanasi.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/todo.png")} />
            </View>
        </View>
    )
}

export default Images;

const styles = StyleSheet.create({
    listStyle: {
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    textStyle: {
        fontSize: 30
    },
    imageStyle: {
        width: "270",
        height: "270",
        marginTop: 10
    }
})