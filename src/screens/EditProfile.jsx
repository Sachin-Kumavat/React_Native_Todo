import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import defaultProfileImage from '../../assets/man.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
    const defaultImageUri = Image.resolveAssetSource(defaultProfileImage).uri;
    const [profileImage, setProfileImage] = useState(defaultImageUri);
    const [asyncImage, setAsyncImage] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const fetchStoredImage = async () => {
            const storedImage = await AsyncStorage.getItem("IMAGE");
            if (storedImage) {
                setAsyncImage(JSON.parse(storedImage));
                setProfileImage(JSON.parse(storedImage));
            } else {
                setAsyncImage(defaultImageUri);
            }
        };
        fetchStoredImage();
    }, []);

    const selectImage = () => {
        let options = {
            mediaType: "photo",
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
            includeBase64: false,
        };

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
                return;
            } else if (response.error) {
                console.log(response.error);
                return;
            }

            const selectedUri = response.assets[0].uri;
            console.log("Selected Image URI:", selectedUri);
            setProfileImage(selectedUri);
            setAsyncImage(selectedUri);
            await AsyncStorage.setItem("IMAGE", JSON.stringify(selectedUri));
        });
    };

    const handleChange= async()=>{
        // const storedName = await AsyncStorage.getItem("NAME")
        // const storedEmail = await AsyncStorage.getItem("EMAIL")
        // const storedPhone = await AsyncStorage.getItem("PHONE")

        // console.log("StoredName:",storedName, "storedEmail :",storedEmail,"storedPhone: ",storedPhone);
        await AsyncStorage.setItem("NAME", name)
        await AsyncStorage.setItem("EMAIL", email)
        await AsyncStorage.setItem("PHONE", phone)
        Alert.alert("Profile Updated Successfully")

    }


    return (
        <ScrollView>
            <View style={styles.profileContainer}>
                {/* <TouchableOpacity style={styles.profileBtn}>
                <Image style={styles.profileImg} source={require("../../assets/man.jpg")} />
            </TouchableOpacity> */}
                <Pressable onPress={selectImage} style={styles.profileBtn}>
                    {
                        asyncImage ? (
                            <Image style={styles.profileImg} source={{ uri: asyncImage }} />
                        ) : (
                            <Text style={{ textAlign: "center" }}>Upload Image</Text>
                        )
                    }
                </Pressable>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.textField}>
                        <Text style={styles.textLabel}>Name</Text>
                        <TextInput onChangeText={(e)=>setName(e)} style={styles.textInput} />
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.textLabel}>Email</Text>
                        <TextInput onChangeText={(e)=>setEmail(e)} style={styles.textInput} />
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.textLabel}>Phone Number</Text>
                        <TextInput onChangeText={(e)=>setPhone(e)} style={styles.textInput} />
                    </View>
                    <TouchableOpacity
                        onPress={handleChange}
                        style={{
                            width: 100,
                            backgroundColor: "#5c68f0",
                            color: "white",
                            height: 40,
                            marginTop: 20,
                            padding: 10,
                            borderRadius: 10
                        }}>
                        <Text style={{ fontSize: 17, textAlign: "center", color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1
    },
    profileBtn: {
        width: 100,
        height: 100,
        backgroundColor: "#5267ee",
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 0
    },
    textField: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20
    },
    textLabel: {
        fontSize: 18,
        marginBottom: 3
    },
    textInput: {
        width: "90%",
        height: 40,
        borderWidth: 1,
        borderColor: "#adaeb9",
        borderRadius: 2,
        fontSize: 15,
        color: "#414144",
        paddingHorizontal: 12
    }
})