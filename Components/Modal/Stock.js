import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function Stock() {
    return (
        <View style={{borderBottomWidth:1,borderColor:'lightgray',height:100}}>

        <View style={{flex:0.5}}>

                <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
                  
                         
                        <Text>Stock</Text>  
                        <Text>{'>'}100 </Text>
                  
                   
                </View>       
                        

        </View>
        <View  style={{flex:0.5}}>

        <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
                  
                         
                  <Text>Sold</Text>  
                  <Text>100 </Text>
            
             
          </View>      
        </View>

    </View>
    )
}

export default Stock
