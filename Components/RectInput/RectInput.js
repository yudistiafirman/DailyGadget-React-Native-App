import React from 'react'
import { Text, View,StyleSheet, TextInput } from 'react-native'

function RectInput({label,value,onFocus,onBlur,onChangeText,maxLength,placeholder,errortext,focus,defaultValue,type}) {



    const styles=StyleSheet.create({


        inputContainer:{height:90,width:'100%',justifyContent:'center'},
        inputfield:{flex:0.5,borderWidth:1,borderColor:focus?'blue':errortext?'red':'lightgray',borderRadius:5},
        error:{fontStyle:'italic',color:'red',fontSize:12}
     
    })

    return (
        <View style={styles.inputContainer}>
        <Text style={{flex:0.4}}>{label}</Text>
        <View style={styles.inputfield}>
                <TextInput keyboardType={type} value={value} defaultValue={defaultValue} onFocus={onFocus} onBlur={onBlur} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder}/>

        </View>
        <Text style={styles.error}>{errortext}</Text>
</View>
    )
}



export default RectInput
