import React from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ModalButton({label,onPress,buttonValue,errortext,onBlur}) {


    const styles= StyleSheet.create({
        inputContainer:{height:90,width:'100%',justifyContent:'center'},
        button:{flex:0.5,borderWidth:1,borderColor:errortext?'red':'lightgray',borderRadius:5,alignItems:'center',flexDirection:'row'},
        buttonText:{color:'lightgray',marginLeft:5,flex:0.5},
        iconContainer:{flex:0.5,alignItems:'flex-end'},
        error:{fontStyle:'italic',color:'red',fontSize:12}
    })


    return (
        <View style={styles.inputContainer}>

              <Text style={{flex:0.4}}>{label}</Text>
              <TouchableOpacity onBlur={onBlur} onPress={onPress} style={styles.button}>

                <Text style={styles.buttonText}>{buttonValue}</Text>
                <View style={styles.iconContainer}>
                        <Icon name="chevron-right" size={20}/>
                </View>

            </TouchableOpacity>
            <Text style={styles.error}>{errortext}</Text>
</View>

    )
}

export default ModalButton
