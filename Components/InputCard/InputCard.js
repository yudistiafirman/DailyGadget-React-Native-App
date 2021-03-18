import React from 'react'
import {View,Text} from 'react-native'
import MyInput from '../../Components/Myinput/Myinput'


const InputCard =({title,onChangeName,onChangePhone,onChangeEmail,onChangeAddress})=>{


        return   <View style={{marginHorizontal:10,marginVertical:50,borderRadius:25}}>

                        <View style={{margin:10}}>
                            <View style={{paddingTop:90}}>

                                        <Text style={{fontSize:18,color:'#656565'}}>{title}</Text>
                    
                             </View>

                            <View style={{borderWidth:0.5,borderColor:'#656565',marginVertical:10}}/>

                            
                             <MyInput placeholder="Id Card No." onChangeText={onChangeName}/>
                             <MyInput placeholder="Name" onChangeText={onChangePhone}/>
                   
              

                
                      </View>

                 </View>

}

export default InputCard