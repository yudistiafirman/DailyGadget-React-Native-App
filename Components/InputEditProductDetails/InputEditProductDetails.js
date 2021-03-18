import React from 'react'
import { Text, TextInput, View } from 'react-native'

function InputEditProductDetails({label,inputLabel,onFocus,onBlur,value,onChangeText,defaultValue,focus}) {
    return (
    <View style={{height:80,justifyContent:'center'}}>

        <View style={{flex:0.3}}>
                 <Text style={{fontWeight:'bold'}}>{label}</Text>
        </View>
      
        
        <View style={{flexDirection:'row',flex:0.5,alignItems:'center',borderBottomWidth:1,borderColor:!focus?'lightgray':'#292929'}}>
             <Text style={{fontWeight:'bold'}}>{inputLabel}</Text>
             <TextInput  onFocus={onFocus} onBlur={onBlur}  value={value} onChangeText={onChangeText} defaultValue={defaultValue}/>    
        </View>
      
        
    </View>  
     
       
    )
}

export default InputEditProductDetails
