import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Products")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/course.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Student")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/student.png")} />

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/cart.png")} />

      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/about.png")} />

      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/contact.png")} />

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Date")}
      >
        <Image style={styles.iconStyle} source={require("../../assets/contact.png")} />

      </TouchableOpacity>


    </View>
  )
}

export default Menu;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",

  },
  textStyle: {
    textTransform: "uppercase",

  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
    // marginHorizontal: 15
  }
})