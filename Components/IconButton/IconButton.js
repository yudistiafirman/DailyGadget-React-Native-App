import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity,StyleSheet} from 'react-native'
function IconButton({onClick,icon}) {
    return (
      
        <TouchableOpacity onPress={onClick} style={style.button}>
                 <Icon name={icon} size={25} color="#ffff"/>
        </TouchableOpacity>
    )
}
const style= StyleSheet.create({
    button:{
    width:48,
    backgroundColor:'#B8D9FA',
    height:48,
    borderRadius:15,
    justifyContent:
    'center',
    alignItems:'center',
    marginLeft:10
}
})
export default IconButton
