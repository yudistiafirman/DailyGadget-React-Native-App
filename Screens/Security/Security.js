import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../Components/Header/Header'
import BlurContainer from '../../Components/BlurContainer/BlurContainer'
import MyInput from '../../Components/Myinput/Myinput'
import Button from '../../Components/Button/Button'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'

export default function Security({navigation}){
    return <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                 <ProfileHeader title="Security" onLeftPress={()=>navigation.navigate('profile')}  iconLeft="arrow-left"/>

                <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:20}}>
                        <MyInput bool={true} text="enter your password" />
                        <MyInput bool={true} text="enter your new password"/>
                       
                       <View style={{marginTop:20,alignItems:'center'}}>
                            <Button variant="primary" label="Submit"/>
                       </View>

                </View>
                
           </SafeAreaView>
      
}