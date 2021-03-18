import React from 'react'
import Modal from 'react-native-modal';
import {View,Text, TouchableOpacity} from 'react-native'


function CameraModal({isVisible,onSwipeComplete,onOpenCamera,onOpenImage}) {
    return (
        <Modal style={{margin:0,alignItems:'center'}} onSwipeComplete={onSwipeComplete} swipeDirection="down" isVisible={isVisible}>
                <View style={{backgroundColor:'white',borderRadius:5}}>
                    <View style={{margin:20,width:270,height:180,justifyContent:'space-between'}}>
                        <View style={{flex:0.5,justifyContent:'center',borderColor:'lightgray'}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Select a photo...</Text>
                        </View>
                        <TouchableOpacity onPress={onOpenCamera} style={{flex:0.5,justifyContent:'center',borderColor:'lightgray'}}>
                            <Text style={{fontSize:16}}>Take a photo....</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onOpenImage} style={{flex:0.5,justifyContent:'center',borderColor:'lightgray'}}>
                            <Text style={{fontSize:16}}>Choose from library...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSwipeComplete} style={{flex:0.5,justifyContent:'center',alignSelf:'flex-end'}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    )
}

export default CameraModal
