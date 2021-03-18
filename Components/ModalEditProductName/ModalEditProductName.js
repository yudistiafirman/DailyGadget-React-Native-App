import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Modal from 'react-native-modal'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

function ModalEditProductName({isVisible,onLeftPress,value,onChangeText,onRightPress,disabled}) {
    return (
        <Modal style={{margin:0}} isVisible={isVisible} >
            <View style={{flex:1,backgroundColor:'#ffff'}}>

                <ProfileHeader iconLeft="close" title="Edit Product Name" onRightPress={onRightPress} disabled={disabled} onLeftPress={onLeftPress} IconRight="check"/>
                    <View style={{flex:1,margin:10}}>

                    <View style={{flex:0.3}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Insert Your Product Name</Text>
                        <Text style={{color:'lightgray',fontSize:16}}>This product's name will be shown on your product's list</Text>
                    </View>

                    <View style={{flex:0.7}}>
                        <Text style={{fontWeight:'bold'}}>Product's name</Text>
                        <TextInput style={{borderBottomWidth:1}} onChangeText={onChangeText} value={value} defaultValue="camera edan eling" placeholder="example,Iphone 5S Gold 16Gb"/>
                    </View>
                    </View>
                </View>
        </Modal>
    )
}

export default ModalEditProductName


                    





           


