import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import IconLogo from '../../Support/Svg/smallicon.svg'


function Logo() {
    return (
        <View style={styles.logoContainer}>
              
                <IconLogo/>
                <Text style={styles.logoText}>P-man.</Text>
            </View >
                
    )
}

const styles=StyleSheet.create({
    logoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    logoText:{
        marginLeft:10,
        fontSize:23,
        fontWeight:'bold'
    },

})

export default Logo
