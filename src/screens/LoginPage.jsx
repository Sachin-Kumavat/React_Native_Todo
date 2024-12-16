import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const validate = async() => {
    console.log("Call hu validate functipon");
    
    let valid = true;
    if (email == '') {
      setWrongEmail(true);
      valid = false;
    } else {
      setWrongEmail(false)
    }
    if (password == '') {
      setWrongPassword(true);
      valid = false;
    } else {
      setWrongPassword(false);
    }

    if (valid) {
      // console.log("Valid hai ye");
      
      // console.log("Enterred Email:", email);
      // console.log("Enterred Password:", password);
      // Check stored credentials
      const storedEmail = await AsyncStorage.getItem('EMAIL');
      const storedPassword = await AsyncStorage.getItem('PASSWORD');
      const storedName = await AsyncStorage.getItem('NAME');
      console.log("Stored Email:", storedEmail);
      console.log("Stored Password:", storedPassword);
      console.log("Stored Name:", storedName);
      // const {name} = useSelector((item)=>item.authSice)
      // console.log("Name from store :", name);
      
      
      if (email === storedEmail && password === storedPassword) {
        Alert.alert('Login Successful'); 
        navigation.navigate('Home'); 
      } else {
        Alert.alert('Invalid email or password'); 
      }
    }



  }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image style={{ width: 60, height: 60, alignSelf: "center", marginTop: 40 }} source={require("../../assets/education.png")} />
        <Text style={styles.loginHeading}>Login</Text>
        <CustomTextInput placeholder={'Enter Email'} icon={require("../../assets/email.png")} value={email} onChangeText={(e) => setEmail(e)} />
        {
          wrongEmail && (
            <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Email Id</Text>
          )
        }
        <CustomTextInput placeholder={'Enter Password'} type={'password'} icon={require("../../assets/padlock.png")} value={password} onChangeText={(e) => setPassword(e)} />
        {
          wrongPassword  && (
            <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Password</Text>
          )
        }
        <TouchableOpacity style={{
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: 'center',
          width: "85%",
          height: 50,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 50,
          marginHorizontal: 27
        }}
          onPress={() => { validate() }}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "800", alignSelf: 'center', marginTop: 20, textDecorationLine: "underline" }}
          onPress={()=>navigation.navigate("SignUp")}
        >Create New Account</Text>
      </View>
    </ScrollView>
  )
}

export default LoginPage;

const styles = StyleSheet.create({
  loginHeading: {
    marginTop: 50,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000"
  },
  emailInput: {
    alignSelf: "center",
    width: "85%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 50,
    paddingLeft: 20
  },
  passInput: {
    alignSelf: "center",
    width: "85%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 20,
    paddingLeft: 20
  }
})