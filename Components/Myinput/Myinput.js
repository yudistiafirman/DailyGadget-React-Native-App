import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react"
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"



const MyInput = ({iconRight,iconRightSize,onPressIcon, text, icon, isPass, size,focus,onFocus,onBlur ,onChangeText, value, bgColor, placeholder }) => {
    const styles = StyleSheet.create({
        inputSection: {
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: focus?"#292929":"#94b4a4",
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: bgColor,

        },
        ImageStyle: {


            alignItems: 'center',
            color: "#b3b3b3",



        },
        input: {
            fontSize: 14,
            color: "#b3b3b3",

        },
        textInput: {

            fontSize: 18,
            flex: 1
        },
        forgotPass: {
            alignSelf: "flex-end",

            color: "#5198e9",
            fontWeight: "bold",
            fontSize: 12
        },

    })

    return (
        <View style={{width:'100%'}}>
            <Text style={styles.input}>{text}</Text>
            <View style={styles.inputSection} >
                <Icon name={icon} size={size} style={styles.ImageStyle} />
                <TextInput style={styles.textInput} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} secureTextEntry={isPass} value={value} onChangeText={onChangeText} />
                <TouchableOpacity style={{paddingRight:10}} onPress={onPressIcon}>
                        <Icon name={iconRight} size={iconRightSize} style={styles.ImageStyle} />

                </TouchableOpacity>
            </View>
        </View>
    )
}


export default MyInput