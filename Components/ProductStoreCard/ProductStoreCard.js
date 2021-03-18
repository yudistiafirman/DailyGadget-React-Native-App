import React from 'react'
import { View, Text, Image, Animated, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductStoreCard = ({ value,onValueChange,onPress }) => {


    const styles=StyleSheet.create({
        cardContainer:{borderWidth:1,marginTop:10,borderColor:'lightgray',borderRadius:10,height:130},
        card:{flex:1,margin:5,},
        productInfoContainer:{flex:0.7,flexDirection:'row'},
        productOption:{flex:0.3,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'},
        optionButton:{width:100,height:'100%',justifyContent:'center',alignItems:'center'},
        button:{flex:1,width:'80%',borderRadius:3,margin:3,justifyContent:'center',alignItems:'center',backgroundColor:'#e40017'},
        imageSide:{flex:0.3,borderWidth:1,borderColor:'lightgray',borderRadius:5},
        infoSide:{flex:0.7},
        image:{width:'100%',height:'100%',resizeMode:'cover'}
    })
    
    return <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.productInfoContainer}>
                
                            <View style={styles.imageSide}>
                                <Image style={styles.image} source={require('../../Support/Images/camera.png')}/>
                            </View>

                            <View style={styles.infoSide}>
                                    <View style={{marginLeft:5}}>

                                        <Text>canon camera edan eling mantap </Text>
                                        <Text style={{fontWeight:'700'}}>Rp.1500.000 </Text>
                                        <View style={{height:22,borderBottomColor:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                              <Text style={{color:'lightgray'}}>Stok 1</Text>
                                              <CheckBox value={value} onValueChange={onValueChange}/>
                                        </View>
           
                                        <View style={{backgroundColor:'#fce38a',height:22,width:'60%',borderRadius:5,justifyContent:'center'}}>
                                                <Text style={{fontSize:10,fontWeight:'bold',textAlign:'center'}}>item not showing in seeker</Text>
                                        </View>

                                    </View>
                            </View>

                        </View>

                        <View style={styles.productOption}>
                                <View style={styles.optionButton}>

                                        <TouchableOpacity onPress={onPress} style={styles.button}>
                                                <Icon name="lastpass" size={30} color="#ffff"/>
                                        </TouchableOpacity>
                                </View>
                        </View>

                </View>

            </View>  

}
                                




                       









export default ProductStoreCard