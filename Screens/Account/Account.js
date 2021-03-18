import React from 'react'
import {View,Text, SafeAreaView} from 'react-native'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import Icon from 'react-native-vector-icons/FontAwesome'
import { icon } from '../../Support/Constant/dataToMap'
import Drawer from '../../Components/Drawer/Drawer'


function Account({navigation}) {
    return<SafeAreaView style={{flex:1,backgroundColor:'white'}}>

           

          
                {
                    icon.map((value, index) => {

                        return <Drawer key={index} navigation={navigation} location={value.location} bgColor={value.bgColor} label={value.label} name={value.name} />
                    })
                }
         
        </SafeAreaView> 

           
        


  
}

export default Account



         
            