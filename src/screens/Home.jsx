import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsLoginAsync } from '../redux/features/authSlice';

const Home = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [asyncImage, setAsyncImage] = useState(null);
    const getName = async () => {
        const storedName = await AsyncStorage.getItem('NAME');
        const imageAsync = await AsyncStorage.getItem("IMAGE");
        setAsyncImage(JSON.parse(imageAsync))
        setName(storedName);
    }

    useEffect(() => {
        getName();
    }, [name])


    const logOut=()=>{
        dispatch(setIsLoginAsync(false));
    }

    // console.log("jgjhfjhfggh", name)

    // const name = AsyncStorage.getItem('NAME');
    // console.log("fdfhdfgdfgd", name)


    // const { name } = useSelector((state) => state.authSlice)
    // console.log("authData from home:", name);

    // const {name} = route.params;
    // const user = JSON.stringify(name)

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <View style={styles.homeTop}>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Welcome <Text style={{ fontSize: 18, color: "#ee4fca" }}>{name ? name : "User"}</Text></Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={()=> navigation.navigate("UserProfile")} >
                                <Image style={{ width: 35, height: 35, backgroundColor: "#fff", marginHorizontal: 10, borderRadius: 20 }} source={{uri : asyncImage}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => logOut() }>
                                <Image style={{ width: "6%", height: 20, aspectRatio: 1 }} source={require("../../assets/logout.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image resizeMethod='contain' style={styles.headerImage} source={require("../../assets/classroom.jpg")} />
                    <Text style={styles.mainHeader}>Welcome to</Text>
                    <Text style={[styles.mainHeader, {
                        fontSize: 33,
                        color: "#0e90bd",
                        marginTop: 0
                    }]}>{props.centerName}</Text>

                    <Text style={styles.paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus alias perspiciatis error amet!.</Text>

                    <View style={styles.menuStyle}>
                        <View style={styles.lineStyle}></View>
                        <Menu />
                        <View style={[
                            styles.lineStyle, {
                                marginVertical: 10,
                            }
                        ]}></View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingVertical: 20,
        backgroundColor: "#fff",
        textAlign: "center"
    },
    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    headerImage: {
        width: "80%",
        height: undefined,
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 20,
        borderRadius: 10
    },
    mainHeader: {
        textAlign: "center",
        fontSize: 30,
        textTransform: "uppercase",
        color: "#344055",
        marginTop: 10
    },
    paraStyle: {
        textAlign: "left",
        fontSize: 18,
        color: "#616463",
        marginTop: 30,
        paddingBottom: 40,
        lineHeight: 25,
        marginHorizontal: 20
    },
    lineStyle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "grey"
    }
})