import React from 'react'
import {View,Text} from 'react-native'

function Badge({text}) {
    return (
        <View style={{backgroundColor:'red',width:40,height:20,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>{text}</Text>
</View>
    )
}

export default Badge
