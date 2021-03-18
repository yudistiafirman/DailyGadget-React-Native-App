import React from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ProductInfoToEdit({label,desc,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}  style={styles.productInfoContainer}>
        <View style={styles.productInfoWrapper}>
               <View style={{flex:0.9,justifyContent:'center'}}>
                     <Text style={{fontWeight:'bold',textTransform:'capitalize'}}>{label} </Text>
                     <Text style={{color:'lightgray'}}>{desc}</Text>
               </View>
               <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                       <Icon name="check-circle" color="red" size={25}/>

               </View>

        </View>

</TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    productInfoContainer:{
        flex:1,
        margin:10,
     
    },
    productInfoWrapper:{
        height:80,
        borderBottomWidth:1,
        borderColor:'lightgray',
        flexDirection:'row'
    }
})

export default ProductInfoToEdit
