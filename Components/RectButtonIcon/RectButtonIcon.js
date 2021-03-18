import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function RectButtonIcon({onPress,iconName,color,label,textColor,bgColor}) {

    const style=StyleSheet.create({
        button:{flex:3.3,borderTopWidth:1,borderColor:'lightgray',justifyContent:'center',alignItems:'center',backgroundColor:bgColor}
    })

    return (
        <TouchableOpacity onPress={onPress} style={style.button}>
        <Icon name={iconName} color={color} size={30}/>
        <Text style={{color:textColor}}>{label}</Text>
  </TouchableOpacity>
    )
}

export default RectButtonIcon
