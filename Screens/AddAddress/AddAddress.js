import React, { useState } from 'react'
import { Text, View,SafeAreaView, ScrollView, TextInput,StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import MyPicker from '../../Components/Picker/Picker';

import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AddAddress({navigation}) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [focusRecepient,SetFocusRecepient]=useState(false)
    const [focusPhone,SetFocusPhone]=useState(false)
 
    return (
            <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>

                    <ProfileHeader onLeftPress={()=>navigation.navigate('Address')} iconLeft="arrow-left" title="Add Address"/>

                        <ScrollView style={{margin:10}}>

                            <View style={{flex:0.15,justifyContent:'flex-end',borderBottomWidth:1,borderColor:'lightgray'}}>
                                <Text style={{marginLeft:10,fontWeight:'bold',textTransform:'uppercase'}}>type of address</Text>
                                <MyPicker selectedValue={selectedLanguage} onValueChange={(itemValue,itemIndex)=>setSelectedLanguage(itemValue)}/>
                            
                            </View>

                            <View style={{flex:0.15,justifyContent:'flex-end',borderBottomWidth:1,borderColor: focusRecepient?"#292929":'lightgray',marginTop:10}}>
                                <Text style={{marginLeft:10,fontWeight:'bold',textTransform:'uppercase'}}>Name of recepient</Text>
                                <TextInput defaultValue="Firman Hadi Yudistia" onBlur={()=>SetFocusRecepient(false)} onFocus={()=>SetFocusRecepient(true)} style={{marginLeft:5,fontSize:18}}/>
                            
                            </View>

                            <View style={{flex:0.15,justifyContent:'flex-end',borderBottomWidth:1,borderColor: focusPhone?"#292929":'lightgray',marginTop:10}}>
                                <Text style={{marginLeft:10,fontWeight:'bold',textTransform:'uppercase'}}>Phone number</Text>
                                <TextInput defaultValue="08122089655" onBlur={()=>SetFocusPhone(false)} onFocus={()=>SetFocusPhone(true)} style={{marginLeft:5,fontSize:18}}/>
                            
                            </View>
                            <View style={{height:200,justifyContent:'space-around',borderBottomWidth:1,borderColor: focusPhone?"#292929":'lightgray',marginTop:10}}>
                                
                                <Text style={{marginLeft:10}}>Set City,State,and your province here</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('location')} style={{widh:100,height:100,borderWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center',borderColor:'lightgray'}}>

                                           <Icon   name="map-search" size={30} color="lightgray"/>   

                                </TouchableOpacity>
                          
                            </View>


                    </ScrollView>        
                                
                       
            </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default AddAddress
