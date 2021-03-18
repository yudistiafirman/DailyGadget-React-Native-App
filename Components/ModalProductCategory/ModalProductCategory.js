import React from 'react'
import Modal from 'react-native-modal';
import { View} from 'react-native'
import ProfileHeader from '../ProfileHeader/ProfileHeader';

function ModalProductCategory({isVisible,onLeftPress,onRightPress,disabled,headerTitle,children}) {
    
    return  <Modal  style={{margin:0}}  isVisible={isVisible}  >
                 <View style={{width:'100%',height:'100%',backgroundColor:'#ffff'}}>

                         <ProfileHeader onLeftPress={onLeftPress} disabled={disabled} onRightPress={onRightPress} title={headerTitle}iconLeft="close"/>
                    {children}
   

                 </View>
    
</Modal>
}

export default ModalProductCategory

                 

