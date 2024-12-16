import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CheckBox from 'react-native-check-box';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const saveData = () => {

    const url = "http://172.16.0.179:3000/users"
    // const url = "https://mocki.io/v1/c268d6a8-c6aa-45fa-83f5-f4b7f482b5ca"
    let result = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, comment })
    })
    setName("");
    setEmail("");
    setComment("")

    console.log("Data send successfully");

    console.log(result);

    Alert.alert("Data filled successfully")

  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeader}>Contact Us</Text>
          <Text style={styles.description}>
            You can reach us anytime @sankey.com
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your Name</Text>
            <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your Email</Text>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your Comments </Text>
            <TextInput
              style={{
                paddingVertical: 50,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.3)",
                paddingHorizontal: 15,
                borderRadius: 5,
                fontSize: 18
              }}
              value={comment} onChangeText={(text) => setComment(text)} autoCapitalize='none' autoCorrect={false} />
          </View>

          <TouchableOpacity
            style={styles.loginbtnStyle}
          // style={[
          //     styles.buttonStyle,
          //     {
          //         backgroundColor: agreed ? "#4630EB" : "grey",
          //     },
          // ]}
          // disabled={!isChecked}
          //  pointerEvents={isChecked ? "auto" : "none"}
          >
            <Text style={styles.buttonText} onPress={saveData}>Submit</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 26,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  mainHeader: {
    fontSize: 35,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 5,
    paddingBottom: 15,
    textTransform: "capitalize"
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular"
  },
  inputContainer: {
    marginTop: 20
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontSize: 18
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  wrapperText: {
    marginLeft: 10,
    fontFamily: "regular",
    fontSize: 16,
    color: "#373936"
  },
  buttonStyle: {
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  loginbtnStyle: {
    backgroundColor: "#6d756c",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 15
  }
})