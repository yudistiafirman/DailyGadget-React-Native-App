import React from 'react'
import { Image, TouchableOpacity,StyleSheet } from 'react-native'

function TinyPicturePreview({onPress,borderColor,source}) {


    const styles=StyleSheet.create({
        tinyPictureContainer:{marginRight:10,width:80,height:80,borderWidth:2,borderColor:borderColor}
    })


    return (
    <TouchableOpacity onPress={onPress} style={styles.tinyPictureContainer}>
                <Image  style={{width:'100%',height:'100%',resizeMode:'contain'}} source={source}/>
    </TouchableOpacity> 
    )
}

export default TinyPicturePreview

