import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Student = () => {
    const [myData, setMyData] = useState([]);
    const getUserData = async () => {
        try {
            // const url = "http://172.16.0.179:3000/users"
            const url = "https://mocki.io/v1/82147761-a750-4d10-83c8-c2579e363f79"
            const response = await fetch(url);
            const data = await response.json();
            setMyData(data);
            console.log("Data Came :", myData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData()
    }, [])

    const showUserData = ({item}) => {
        return (
            <View style={styles.card}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.imgStyle}
                        source={require("../../assets/Man2.png")}
                    />
                </View> 
                <View>
                    <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio Data</Text>
                        <Text style={styles.idNumber}>
                            {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                        </Text>
                    </View>
                    <View style={styles.mainContaine}>
                        <Text style={styles.myName}>Name: {item.name}</Text>
                        <Text style={styles.myName}>Name: {item.email}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.mainHeader}>List Of Student</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={myData}
                renderItem={showUserData}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Student;

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 20
    },
    bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 10,

    },
    bioData: {
        fontSize: 30,
        color: "#fff"
    },
    idNumber: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.5)",
        paddingRight: 10
    },
    mainHeader: {
        fontSize: 30,
        color: "#a18ce5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    imgContainer: {
        padding: 10
    },
    imgStyle: {
        width: "100%",
        height: 230,

    },
    mainContaine: {
        padding: 10,
        backgroundColor: "#353535",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "capitalize",

    }

})