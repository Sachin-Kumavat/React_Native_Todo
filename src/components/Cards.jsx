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






































// import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
// // import {CheckBox} from '@react-native-community/cli-platform-android'
// import CheckBox from 'react-native-check-box'
// import React, { useState } from 'react'

// const Login = (props) => {

//     const saveData = () => {
//         // console.log("Login button clicked");

//         // console.log(name);
//         // console.log(email);
//         // console.log(password);

//         const url = "http://10.0.2.2:3000/users"
//         // const url = "https://mocki.io/v1/c268d6a8-c6aa-45fa-83f5-f4b7f482b5ca"
//         let result = fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ name, email, password })
//         })
//         setName("")
//         setEmail("")
//         setPassword("")

//         console.log("Data send successfully");

//         console.log(result);

//         Alert.alert("Data filled successfully")

//     }


//     const [isChecked, setIsChecked] = useState(false);
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     return (
//         <ScrollView>
//             <KeyboardAvoidingView>
//                 <View style={styles.mainContainer}>
//                     <Text style={styles.mainHeader}>Login Form</Text>
//                     <Text style={styles.description}>
//                         You can reach us anytime @sankey.com
//                     </Text>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.labels}>Enter Your Name</Text>
//                         <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.labels}>Enter Your Email</Text>
//                         <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.labels}>Enter Your Password</Text>
//                         <TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
//                     </View>

//                     <View style={styles.wrapper}>
//                         <CheckBox
//                             isChecked={isChecked}
//                             onClick={() => setIsChecked(!isChecked)}
//                             color={isChecked ? "#4630EB" : "blue"}
//                         // value={agreed}
//                         // onValueChange={() => setAgreed(prev => !prev)}
//                         // color={agreed ? "" : "#7d7d7d"}
//                         />
//                         <Text style={styles.wrapperText}>
//                             I have read and agreed with the Terms and conditions.
//                         </Text>
//                     </View>
//                     <TouchableOpacity
//                         style={styles.loginbtnStyle}
//                         // style={[
//                         //     styles.buttonStyle,
//                         //     {
//                         //         backgroundColor: agreed ? "#4630EB" : "grey",
//                         //     },
//                         // ]}
//                         disabled={!isChecked}
//                     //  pointerEvents={isChecked ? "auto" : "none"}
//                     >
//                         <Text style={styles.buttonText} onPress={saveData}>Login</Text>
//                     </TouchableOpacity>

//                     <Button title='Data' color="#7d7d7d"
//                         onPress={() => props.navigation.navigate("Cards")}
//                     />

//                 </View>
//             </KeyboardAvoidingView>
//         </ScrollView>
//     )
// }

// export default Login;

// const styles = StyleSheet.create({
//     mainContainer: {
//         height: "100%",
//         paddingHorizontal: 26,
//         paddingTop: 30,
//         backgroundColor: "#fff"
//     },
//     mainHeader: {
//         fontSize: 35,
//         color: "#344055",
//         fontWeight: "500",
//         paddingTop: 20,
//         paddingBottom: 15,
//         textTransform: "capitalize"
//     },
//     description: {
//         fontSize: 20,
//         color: "#7d7d7d",
//         paddingBottom: 20,
//         lineHeight: 25,
//         fontFamily: "regular"
//     },
//     inputContainer: {
//         marginTop: 20
//     },
//     labels: {
//         fontSize: 18,
//         color: "#7d7d7d",
//         marginTop: 10,
//         marginBottom: 5,
//         lineHeight: 25
//     },
//     inputStyle: {
//         borderWidth: 1,
//         borderColor: "rgba(0,0,0,0.3)",
//         paddingHorizontal: 15,
//         paddingVertical: 7,
//         borderRadius: 5,
//         fontSize: 18
//     },
//     wrapper: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginTop: 15,
//     },
//     wrapperText: {
//         marginLeft: 10,
//         fontFamily: "regular",
//         fontSize: 16,
//         color: "#373936"
//     },
//     buttonStyle: {
//         marginTop: 30,
//         padding: 15,
//         borderRadius: 5,
//         alignItems: "center",
//     },
//     buttonText: {
//         color: "#fff",
//         fontSize: 18,
//         fontWeight: "bold",
//         textAlign: "center"
//     },
//     loginbtnStyle: {
//         backgroundColor: "#6d756c",
//         paddingVertical: 10,
//         borderRadius: 10,
//         marginVertical: 15
//     }
// })
