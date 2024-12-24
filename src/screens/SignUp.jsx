import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/features/authSlice';

const SignUp = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [wrongName, setWrongName] = useState(false);
    const [email, setEmail] = useState("");
    const [wrongEmail, setWrongEmail] = useState(false);
    const [phone, setPhone] = useState("");
    const [wrongPhone, setWrongPhone] = useState(false);
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [wrongConfirmPassword, setWrongConfirmPassword] = useState(false);

    const validate = () => {
        let isValid = true;

        if (name === '') {
            setWrongName(true);
            isValid = false;
        } else {
            setWrongName(false);
        }

        if (email === '') {
            setWrongEmail(true);
            isValid = false;
        } else {
            setWrongEmail(false);
        }

        if (phone === '') {
            setWrongPhone(true);
            isValid = false;
        } else {
            setWrongPhone(false);
        }

        if (password === '') {
            setWrongPassword(true);
            isValid = false;
        } else {
            setWrongPassword(false);
        }

        if (confirmPassword === '') {
            setWrongConfirmPassword(true);
            isValid = false;
        } else if (password !== confirmPassword) {
            setWrongConfirmPassword(true);
            isValid = false;
        } else {
            setWrongConfirmPassword(false);
        }

        if (isValid) {
            saveData();
        }
    };

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PHONE', phone);
            await AsyncStorage.setItem('PASSWORD', password);
            // await AsyncStorage.setItem("ISLOGIN", false);

            // console.log("Stored Email:", email);
            // console.log("Stored Password:", password);
            dispatch(signUp({ name, email, phone, password }))
            navigation.navigate("LoginPage");
        } catch (error) {
            console.error("Error saving data to AsyncStorage:", error);
        }
    };

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ width: 60, height: 60, alignSelf: "center", marginTop: 40 }}
                    source={require("../../assets/education.png")}
                />
                <Text style={styles.signupHeading}>Sign Up</Text>
                <CustomTextInput
                    value={name}
                    placeholder={'Enter Name'}
                    icon={require("../../assets/user.png")}
                    onChangeText={(e) => setName(e)}
                />
                {wrongName && <Text style={styles.errorText}>Please Enter Name</Text>}

                <CustomTextInput
                    value={email}
                    placeholder={'Enter Email'}
                    icon={require("../../assets/email.png")}
                    onChangeText={(e) => setEmail(e)}
                />
                {wrongEmail && <Text style={styles.errorText}>Please Enter Email Id</Text>}

                <CustomTextInput
                    keyboardType={'number-pad'}
                    value={phone}
                    placeholder={'Enter Phone'}
                    icon={require("../../assets/mobile.png")}
                    onChangeText={(e) => setPhone(e)}
                />
                {wrongPhone && <Text style={styles.errorText}>Please Enter Phone</Text>}

                <CustomTextInput
                    value={password}
                    placeholder={'Enter Password'}
                    type={'password'}
                    icon={require("../../assets/padlock.png")}
                    onChangeText={(e) => setPassword(e)}
                />
                {wrongPassword && <Text style={styles.errorText}>Please Enter Password</Text>}

                <CustomTextInput
                    value={confirmPassword}
                    placeholder={'Enter Confirm Password'}
                    type={'password'}
                    icon={require("../../assets/padlock.png")}
                    onChangeText={(e) => setConfirmPassword(e)}
                />
                {wrongConfirmPassword && (
                    <Text style={styles.errorText}>Passwords do not match</Text>
                )}

                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={validate}
                >
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text
                    style={styles.alreadyAccountText}
                    onPress={() => navigation.navigate("LoginPage")}
                >
                    Already have an account?
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    signupHeading: {
        marginTop: 50,
        alignSelf: "center",
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
    },
    errorText: {
        marginTop: 10,
        marginLeft: 30,
        color: "red",
    },
    signupButton: {
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: 'center',
        width: "85%",
        height: 50,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 50,
    },
    signupButtonText: {
        color: "#fff",
        fontSize: 17,
    },
    alreadyAccountText: {
        fontSize: 18,
        fontWeight: "800",
        alignSelf: 'center',
        marginTop: 20,
        textDecorationLine: "underline",
        marginBottom: 40,
    },
});

export default SignUp;
