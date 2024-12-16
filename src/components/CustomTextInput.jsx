import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder, keyboardType, icon, type }) => {

    return (
        <View style={{
            alignSelf: "center",
            width: "85%",
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            marginTop: 30,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            flexDirection: "row"
        }}>
            <Image source={icon} style={{
                width: 24,
                height: 24
            }} />

            <TextInput
                keyboardType={keyboardType ? keyboardType : 'default'}
                value={value} 
                placeholder={placeholder} 
                style={{ marginLeft: 10 }} 
                secureTextEntry={type==="password"?true:false} 
                onChangeText={(e)=>onChangeText(e)} />

        </View>
    )
}

export default CustomTextInput