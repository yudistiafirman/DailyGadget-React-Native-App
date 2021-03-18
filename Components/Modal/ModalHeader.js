import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {Button, Text, View,StyleSheet, TouchableOpacity} from 'react-native';

function ModalHeader({onPress}) {
    return (
        <View style={styles.modalHeader}>
                        
             <View style={styles.stripeContainer}>
                    <View style={styles.stripe} />
              </View>

        <View style={styles.headerTitleContainer}>

                <View style={styles.headerTitle}>

                        <TouchableOpacity onPress={onPress} style={styles.closeButton}>
                            <Icon name="md-close-outline" size={30} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Informasi barang</Text>
                </View>
        </View>

            

    </View>
    )
}
const styles=StyleSheet.create({
  
    modalHeader:{
     borderBottomWidth:1,width:'100%',height:80,borderColor:'lightgray'
    },
    stripeContainer:{
        flex:0.2,justifyContent:'center',alignItems:'center'
    },
    stripe:{
        width:50,height:3,backgroundColor:'lightgray'
    },
    headerTitleContainer:{
      justifyContent:'center',alignItems:'center',flex:0.8
    },
    headerTitle:{
       width:'100%',height:'50%',flexDirection:'row',alignItems:'center'
    },
    closeButton:{
        width:50,height:'100%',justifyContent:'center',alignItems:'center'
    },
    title:{
        fontSize:20,textTransform:'capitalize',fontWeight:'600'
    }
})
export default ModalHeader
