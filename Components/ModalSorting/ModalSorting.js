import React from 'react'
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from 'react-native'
import Modal  from 'react-native-modal'
import { sortingOptions } from '../../Support/Constant/dataToMap'

import ProfileHeader from '../ProfileHeader/ProfileHeader'

function ModalSorting({isVisible,onSwipeComplete,onLeftPress}) {
    return (

        <Modal style={{justifyContent:'flex-end',margin:0}} isVisible={isVisible} onSwipeComplete={onSwipeComplete}>
           

                <View style={{flex:0.5,backgroundColor:'#ffff'}}>
                     <ProfileHeader iconLeft="close" title="Sorting Products" onLeftPress={onLeftPress}/>

                     <FlatList data={sortingOptions} showsVerticalScrollIndicator={false} renderItem={({index,item})=>{
                         return <TouchableOpacity style={{height:50,width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:16}}>{item}</Text>
                                 </TouchableOpacity>
                     }} keyExtractor={(item)=>item}/>
                        
                </View>


        </Modal>
      
    )
}

export default ModalSorting
