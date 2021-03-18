import React from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function TinyPictureIcon({onPress}) {
    return (
    <TouchableOpacity onPress={onPress} style={styles.IconContainer}>
        <Icon name="camera" size={20} />
   </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    IconContainer:{width:80,height:80,backgroundColor:'lightgray',justifyContent:'center',alignItems:'center'}
})

export default TinyPictureIcon
