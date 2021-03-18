import React, { useRef, useState } from 'react'
import { ScrollView, View ,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal'
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn';

function ModalProductInfo({isVisible,onSwipeComplete,onLeftPress,onDiscountNavigation,onEditNavigation}) {

   
return   <Modal
            testID={'modal'}
            swipeThreshold={60}

            isVisible={isVisible}
            onSwipeComplete={onSwipeComplete}
     
        
     
            style={styles.modal}>
            <View style={styles.scrollableModal}>

                <ScrollView
            
                style={{backgroundColor:'white'}}
                >
                    <ProfileHeader onLeftPress={onLeftPress} iconLeft="close" title="Product Information" />
                    
                    <View style={styles.productInfoContainer}>

                            <View style={styles.productInfo}>
                                    <View style={styles.imageContainer}>
                                            <Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={require('../../Support/Images/camera.png')}/>

                                    </View>
                                    <View style={styles.information}>
                                            <Text>camera edan eling</Text>
                                            <Text>Rp.1500.000</Text>
                                        
                                    </View>


                            </View>


                    </View>
                    <View style={styles.productInfoContainer}>

                    <View style={styles.productInfo}>
                            <View style={styles.productStatus}>
                                <Text style={{fontWeight:'bold'}}>1</Text>
                                <Text style={{color:'#292929'}}>Stock</Text>
                            </View>
                            <View style={styles.productStatus}>
                                  <Text style={{fontWeight:'bold'}}>1</Text>
                                <Text style={{color:'#292929'}}>Sold</Text>
                            </View>
                            <View style={styles.productStatus}>
                                <Text style={{fontWeight:'bold'}}>1</Text>
                                <Text style={{color:'#292929'}}>Seen</Text>
                            </View>
                            <View style={styles.productStatus}>
                                    <Text style={{fontWeight:'bold'}}>1</Text>
                                <Text style={{color:'#292929'}}>Favorited</Text>
                            </View>
                     


                    </View>

                    


</View>
                
                    <View style={styles.productDiscountContainer}>

                            <View style={styles.DiscountInfo}>

                                <View style={styles.discountIcon}>

                                        <Icon style={{marginTop:14}} name="tag-minus-outline" color="red" size={22}/>
                                </View>
                                <View style={styles.discountText}>
                                        <Text style={{fontWeight:'bold'}}>Discount</Text>
                                        <Text style={{fontSize:12}}>Percentage</Text>
                                        <Text style={{fontSize:12}}>Price Discount</Text>
                                        <Text style={{fontSize:12}}>Periode</Text>


                                </View>
                                <View style={styles.discountInformation}>
                                          <Text style={{fontWeight:'bold'}}></Text>
                                        <Text style={{fontSize:12}}>:-</Text>
                                        <Text style={{fontSize:12}}>:-</Text>
                                        <Text style={{fontSize:12}}>:-</Text>

                                </View>


                            </View>

                            <TouchableOpacity onPress={onDiscountNavigation} style={styles.navigationButton}>
                                    <Text style={styles.discountLabel}>Set Discount</Text>

                            </TouchableOpacity>

                    </View>

                    <View style={styles.productHistory}>

                            <View style={styles.historyInfo}>

                                    
                                         <View style={styles.discountIcon}>

                                                    <Icon name="information-outline" size={22} color="red" style={{marginTop:10}}/>
                                        </View>



                                        <View style={styles.discountText}>
                                                <Text style={{fontWeight:'bold'}}>Product History</Text>
                                                <Text style={{fontSize:12}}>Started to Sold</Text>
                                                <Text  style={{fontSize:12}}>Last time Updated</Text>

                                        </View>
                                        <View style={styles.discountInformation}>
                                                <Text ></Text>
                                                <Text  style={{fontSize:12}}>: 10/03/2021 02:23 wib</Text>
                                                <Text  style={{fontSize:12}}>: 10/03/2021 02:23 wib</Text>

                                        </View>
                            </View>

                            <TouchableOpacity onPress={onEditNavigation} style={styles.navigationButton}>
                            <Text style={styles.discountLabel}>Edit Product</Text>
                                
                            </TouchableOpacity>
                    </View>

                 </ScrollView>
        </View>


        <View style={styles.buttonBottom}>
                <ConfirmBtn onPress={onEditNavigation} label="edit data"/>
                <ConfirmBtn onPress={onEditNavigation} label="See Product" variant="red"/>
        </View>
</Modal>
}
const styles=StyleSheet.create({
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
      
    },
    scrollableModal: {
      height: 400,
  
    },
    scrollableModalContent1: {
      height: 200,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    productInfoContainer:{
        height:90,
        
        backgroundColor:'#edffec'
    },
    productInfo:{
        margin:10,
        flex:1,
        backgroundColor:'#ffff',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'lightgray'
    },
    imageContainer:{
        flex:0.3,
        
    },
    information:{
        flex:0.4,
      
    },
    productStatus:{
        flex:0.25,
     
        justifyContent:'center',
        alignItems:'center'
    },
    productDiscountContainer:{
        height:250,
     
        backgroundColor:'#edffec'
    },
    DiscountInfo:{
        margin:10,
        flex:0.7,
        flexDirection:'row',
        backgroundColor:'#ffff'
    },
    navigationButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
    
        borderColor:'lightgray',
        flex:0.3
    },
    discountLabel:{
        fontWeight:'bold',
        color:'red'
    },
    discountIcon:{
        flex:0.2,
        
        alignItems:'center',
        
    },
    discountText:{
        flex:0.4,
        justifyContent:'space-around'
       
    },
    discountInformation:{
        flex:0.4,
      
        justifyContent:'space-around'
    },
    productHistory:{
        height:200,
   
       
        backgroundColor:'#edffec'
    
    },
    productHistoryContainer:{
        flex:0.8,
      
        borderWidth:1,
     
    },
    historyInfo:{
        flex:0.8,
        backgroundColor:'#ffff',
        margin:10,
        flexDirection:'row'
    },
    buttonBottom:
        {height:70,
         borderWidth:1,
         backgroundColor:'#ffff',
         flexDirection:'row',
         borderWidth:1,
         borderColor:'lightgray',
         justifyContent:'space-around',
         alignItems:'center'
        },
    button: {
     flex:0.4,
     borderWidth:1,
     height:40,
     borderColor:
     'lightgray',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:5
    }
    
   
  });
  
export default ModalProductInfo
         
                     

               
                

   
