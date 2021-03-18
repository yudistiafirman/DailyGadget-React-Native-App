import React from 'react'
import Modal from 'react-native-modal';
import {TextInput, View} from 'react-native'
import ProfileHeader from '../ProfileHeader/ProfileHeader';

function ModalProductDescription({isVisible,onLeftPress,IconRight,headerTitle,value,onChangeText,disabled,onRightPress}) {
    return (
        <Modal  style={{margin:0}}  isVisible={isVisible}  >
        <View style={{width:'100%',height:'100%',backgroundColor:'#ffff'}}>
            <ProfileHeader onLeftPress={onLeftPress} onRightPress={onRightPress} IconRight={IconRight} disabled={disabled} title={headerTitle}iconLeft="close"/>

       
            <TextInput multiline value={value} onChangeText={onChangeText} placeholder="must at least contain 30 characters"/>
        

        
        </View>

</Modal>
    )
}

export default ModalProductDescription
