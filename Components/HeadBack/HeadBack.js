import React from 'react'
import { View, TouchableOpacity,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
function HeadBack({text,onGoback}) {
    return (
        <View style={{flexDirection:'row'}}>

             <TouchableOpacity onPress={onGoback} style={styles.goback}>
                 <Icon name="arrow-left" size={18} color="#ffff"/>
              </TouchableOpacity>

            <View style={{justifyContent:'center',marginLeft:10}}>
                 <Text style={{fontSize:24,color:'#845ec2'}}>{text}</Text>
            </View>

    </View>
    )
}

const styles=StyleSheet.create({
    goback:{
        width:40,
        height:40,
        justifyContent:'center',
        backgroundColor:'#7f58ff',
        alignItems:'center',
        borderRadius:20
    }
})

export default HeadBack
