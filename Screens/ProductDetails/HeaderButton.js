import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function HeaderButton() {
    return (
    
        <View style={styles.headerContainer}>
             

                <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'lightgray',borderRadius:5}}>

                        <MyIcon name="heart-plus-outline" size={30} color="#686868"/>

                </TouchableOpacity >
                <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'lightgray',borderRadius:5,marginLeft:10}}>

                        <MyIcon name="cart-plus" size={30} color="#686868"/>

                </TouchableOpacity >

                <TouchableOpacity style={{marginLeft:10,width:150,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius:5}}>
                        <Text style={{color:'#ffff'}}>Buy Now</Text>

                </TouchableOpacity>
        </View>
    
        )
}

const styles=StyleSheet.create({
    headerContainer:{width:'100%',height:60,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}
})

export default HeaderButton
