import React from 'react'
import IconButton from '../../Components/IconButton/IconButton'
import {View,StyleSheet} from 'react-native'

function HomeHeader({navigation}) {
    return (
        <View style={styles.header}>

        <IconButton icon="cart-arrow-down"/>
        <IconButton icon="comment-alt"/>
</View>
    )
}

const styles=StyleSheet.create({
    header: {  
     
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
     
    },
    
      
        
       
    

})

export default HomeHeader
