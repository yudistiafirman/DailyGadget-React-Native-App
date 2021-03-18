import React from 'react'
import { TouchableOpacity,StyleSheet,Text,View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function Options({value,onPress,icon}) {
    return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center',marginLeft:10}}>
                        <Icon name={icon} color="lightgray" size={25}/>
                        <Text>{value}</Text>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                        <Icon name="chevron-right" color="lightgray" size={25}/>
                
                    </View>
          
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{height:50,borderBottomWidth:1,borderColor:'lightgray',justifyContent:'center',flexDirection:'row',alignItems:'center'}
})

export default Options
