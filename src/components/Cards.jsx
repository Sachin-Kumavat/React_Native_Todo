import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [myData, setMyData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            // const response = await fetch("http://172.16.0.33:3000/users");
            const response = await fetch("https://mocki.io/v1/b4b1f2b5-26c2-496b-b89b-57446a2ca432");
            const data = await response.json();
            console.log("data of cards :", data);
            setMyData(data);
            setIsLoaded(false);
        } catch (error) {
            console.log(error);
        }
    };

    //keyavoidingview

    useEffect(() => {
        getUserData();
    }, []);

    console.log("myData", myData);


    return (
        <View style={styles.container}>
            
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={myData}
                    renderItem={({ item }) => {
                        console.log(item.name, item.email, item.password);
                        return (
                            <View style={styles.card}>
                                <View style={styles.imgContainer}>
                                    <Image style={styles.image} source={require("../../assets/Man2.png")} />
                                </View>
                                <View style={styles.dataContainer}>
                                    <View style={styles.bioDataContainer}>
                                        <Text>Bio-Data</Text>
                                        <Text>{item.id}</Text>
                                    </View>
                                    <View style={styles.cardsContainer}>
                                        <View style={styles.card}>
                                            <Text style={styles.text}>Name: {item.name}</Text>
                                            <Text style={styles.text}>Email: {item.email}</Text>
                                            <Text style={styles.text}>Password: {item.password}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />

                <Text>vfjebfbhvvhvhvejfbjej</Text>
            
        </View>

        
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        // width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b696d7"
    },
    container: {
        paddingTop: 10,
        paddingHorizontal: 6,
        backgroundColor: "#fff"
    },
    card: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10
    },
    imgContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width:200,
        height: 200
    },
    card: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 }
    },
    text: {
        fontSize: 16,
        marginBottom: 5
    },
    dataContainer: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10
    },
    bioDataContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});


export default Cards;
