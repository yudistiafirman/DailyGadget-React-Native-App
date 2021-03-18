import React, { useRef } from 'react'
import { Text, TextInput, View } from 'react-native'
import Modal from 'react-native-modal'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

function ModalProductDetail({isVisible,onLeftPress,onRightPress,disabled,headerTitle,iconRight,children}) {

    const focusPrice=useRef()
    return (
        <Modal  style={{margin:0}}  isVisible={isVisible}  >
        <View style={{width:'100%',height:'100%',backgroundColor:'#ffff'}}>

                <ProfileHeader onLeftPress={onLeftPress} disabled={disabled} IconRight={iconRight} onRightPress={onRightPress} title={headerTitle}iconLeft="close"/>
                <View style={{flex:1,margin:10}}>

                    <View style={{flex:0.1}}>
                        <Text style={{fontSize:20}}>Set detail's of your product</Text>
                    </View>

                    <View style={{flex:0.9}}>
           
                            {children}
                    </View>





                </View>


        </View>
        </Modal>
    )
}

export default ModalProductDetail
