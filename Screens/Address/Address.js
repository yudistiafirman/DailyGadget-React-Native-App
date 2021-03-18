import React from 'react'
import { SafeAreaView, Text,StyleSheet,View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'

export default function Address({navigation}){
    return <SafeAreaView style={{backgroundColor:'#ffff',flex:1}}>
                    
                    <ProfileHeader iconLeft="arrow-left" title="Address" IconRight="plus" onLeftPress={()=>navigation.navigate('profile')} onRightPress={()=>navigation.navigate('Addaddress')}/>

                    <View style={{flex:0.5}}>

                        <View style={{margin:20,flex:1,justifyContent:'space-between'}}>

                                <Text style={{textTransform:'uppercase',fontSize:16,color:'darkgray'}}>Primary Address</Text>
                                <View style={{height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                                        <Text style={{fontSize:18,color:'#292929'}}>Home</Text>
                                        <Icon name="map-marker" size={25}/>
                                      
                                </View>

                                <Text style={{fontSize:18}}>Firman Hadi Yudistia</Text>
                                <View style={{height:100,width:250}}>

                                        <Text style={{fontSize:16}}>Perum Jatihurip Blok 3 No.166,Sumedang Utara Kabupaten Sumedang,kabupaten:Sumedang,45321</Text>

                                </View>
                                <Text style={{fontSize:16}}>0912203949349</Text>

                                <View style={{width:100,height:40,borderRadius:5,justifyContent:'center', alignItems:'center',backgroundColor:'lightgray',flexDirection:'row'}}>

                                    <Icon name="pencil" size={20}/>
                                    <Text>Edit</Text>
                                    
                                </View>

                        </View>

                    </View>
         </SafeAreaView>
}

