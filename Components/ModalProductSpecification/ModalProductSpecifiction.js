import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Modal from 'react-native-modal'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

function ModalProductSpecifiction({isVisible,onLeftPress,onRightPress,disabled,headerTitle,iconRight,children}) {
    return (
        <Modal  style={{margin:0}}  isVisible={isVisible}  >
        <View style={{width:'100%',height:'100%',backgroundColor:'#ffff'}}>

                <ProfileHeader onLeftPress={onLeftPress} disabled={disabled} IconRight={iconRight} onRightPress={onRightPress} title={headerTitle}iconLeft="close"/>
                <View style={{flex:1,margin:10}}>

                <View style={{flex:0.15}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Select Your Product Brand</Text>
                    <Text style={{color:'lightgray',fontSize:16}}>This brand's name will be shown on your product's list</Text>
                </View>

                <View style={{flex:0.9}}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>Brand's name</Text>
                    {children}
                </View>
                </View>


        </View>
        </Modal>
    )
}

export default ModalProductSpecifiction
