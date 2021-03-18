import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { Text, View,StyleSheet } from 'react-native';

function MyCheckBox({label,initialValue,value,onValueChange}) {
    return (
        <View style={styles.checkboxContainer}>

            <Text style={{flex:0.4}}>{label}</Text>
            <View style={{flex:0.6,flexDirection:'row',alignItems:'center'}}>
                <CheckBox value={value} onValueChange={onValueChange} />
                <Text style={{fontWeight:'bold'}}>{initialValue}</Text>
            </View>
                                  
        </View>
    )
}

const styles=StyleSheet.create({
    checkboxContainer:{width:'60%'}
})

export default MyCheckBox
