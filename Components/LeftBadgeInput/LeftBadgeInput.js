import React from 'react'
import { Text, TextInput, View,StyleSheet } from 'react-native'

function LeftBadgeInput({satuan,type,label,value,onFocus,onBlur,onChangeText,maxLength,placeholder,errortext,focus,defaultValue}) {

  const styles=StyleSheet.create({
    inputContainer:{height:90,width:'100%',justifyContent:'center'},
    inputfield:{flex:0.5,borderWidth:2,borderColor:focus?'blue':errortext?'red':'lightgray',borderRadius:5,flexDirection:'row',alignItems:'center'},
    error:{fontStyle:'italic',color:'red',fontSize:12},
    inputBadge:{width:50,height:'100%',backgroundColor:'#f0e4d7',justifyContent:'center',alignItems:'center'}
  })

    return (
        <View style={styles.inputContainer}>

        <Text style={{flex:0.4}}>{label}</Text>

        <View style={styles.inputfield}>
                <View style={styles.inputBadge}>
                    <Text style={{fontWeight:'bold'}}>{satuan}</Text>
                </View>
                <TextInput  keyboardType={type} value={value} onFocus={onFocus} defaultValue={defaultValue} onBlur={onBlur} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder}/>

        </View>
        <Text style={styles.error}>{errortext}</Text>
</View>

    )
}

export default LeftBadgeInput
