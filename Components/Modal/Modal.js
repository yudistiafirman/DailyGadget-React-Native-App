import React, {useState} from 'react';
import {Button, Text, View,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import ModalDesc from './ModalDesc';

import ModalHeader from './ModalHeader';
import Spesification from './Spesification';
import Stock from './Stock';
function ModalTester({toggleModal,isVisible,onSwipeComplete}) {


    return (
      <View style={{flex: 1}}>
       

        
        <Modal style={{margin:0}} onSwipeComplete={onSwipeComplete} swipeDirection="down" isVisible={isVisible}>

                <View style={styles.modalContainer}>

                        <ModalHeader onPress={onSwipeComplete}/>
                        <ScrollView>
                                <Stock/> 
                                <Spesification/>
                                <ModalDesc/>
                                
                             
                        </ScrollView>
                      

                       

                </View>
        </Modal>
      </View>
    );
}

const styles=StyleSheet.create({
    modalContainer:{
        flex: 1,backgroundColor:'#ffff',borderRadius:10
    }
})

export default ModalTester;