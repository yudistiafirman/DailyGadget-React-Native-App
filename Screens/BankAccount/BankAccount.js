import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {CreditCardInput} from 'react-native-credit-card-input-fullpage'

import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'


export default function BankAccount({navigation}){



    return <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                <ProfileHeader iconLeft="arrow-left" title="your bank account" onLeftPress={()=>navigation.navigate('profile')}/>
                <View style={{flex:1,justifyContent:'center'}}>
                        <CreditCardInput/>
                </View>
            
          </SafeAreaView>
}