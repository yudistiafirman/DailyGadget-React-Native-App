import React from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'

function ConfirmBtn({variant,onPress,label}) {
    return (
        <TouchableOpacity onPress={onPress} style={[variant==='red'?{...styles.button,backgroundColor:'red'}:{...styles.button}]}>
                <Text style={{fontWeight:'bold',color:variant==='red'?'#ffff':'#292929'}}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button: {
        flex:0.4,
        borderWidth:1,
        height:40,
        borderColor:
        'lightgray',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
       }
})

export default ConfirmBtn
