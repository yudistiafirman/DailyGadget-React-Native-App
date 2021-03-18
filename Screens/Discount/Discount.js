import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import { discountOption, discountOptionDetails } from '../../Support/Constant/dataToMap'
import RectButtonIcon from '../../Components/RectButtonIcon/RectButtonIcon'
import LeftBadgeInput from '../../Components/LeftBadgeInput/LeftBadgeInput'
import RectInput from '../../Components/RectInput/RectInput'

function Discount({navigation}) {

    const [idx,SetIndex]=useState(0)
    return (
            <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                        <ProfileHeader iconLeft="arrow-left" onLeftPress={()=>navigation.goBack()} title="Discount"/>

                        <View style={styles.imageContainer}>
                                <View style={styles.imageWrapper}>
                                        <View style={styles.image}>
                                            <Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={require('../../Support/Images/camera.png')}/>

                                        </View>
                                        <View style={styles.productInfo}>
                                            <Text>Camera edan eling</Text>
                                            <Text style={{fontWeight:'bold'}}>Rp.2500.000</Text>
                                        </View>

                                </View>

                        </View>

                        <View style={styles.discountContainer}>
                                <View style={styles.discountWrapper}>

                                    <Text style={{fontWeight:'bold',flex:0.07}}>Set discount for this product</Text>

                                    <View style={{flex:0.08}}>
                                        <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent:'space-between',flexDirection:'row'}} data={discountOption} horizontal renderItem={({item,index})=><TouchableOpacity style={idx==index?[{...styles.typeDiscount,borderColor:'red'}]:styles.typeDiscount} onPress={()=>SetIndex(index)}><Text style={{fontWeight:'bold'}}>{item}</Text></TouchableOpacity>} keyExtractor={(index)=>index.toString()}/>
                                    </View>

                                    <View style={{flex:0.17}}>
                                    <FlatList showsVerticalScrollIndicator={false} data={discountOptionDetails} renderItem={({item,index})=>{
                                    return index ===idx&&<LeftBadgeInput satuan={index===1?"%":"Rp."} label={item.title}  placeholder={item.btnplaceHolder}/>}}
                                     keyExtractor={(item)=>item.id}/>
                                     </View>

                                     <View style={{flex:0.2}}>
                                     <RectInput label="Periode" placeholder="insert the periode of your discount"/>

                                     </View>

                                    <TouchableHighlight style={{backgroundColor:'red',height:40,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                                        <Text style={{fontSize:20,color:'#ffff',fontWeight:'bold'}}>Save</Text>
                                    </TouchableHighlight>

                                </View>


                        </View>

                        
            </SafeAreaView>



    )
}

const styles=StyleSheet.create({
    imageContainer:{
        flex:0.15,
        borderBottomWidth:1,
        borderColor:'lightgray'
    },
    imageWrapper:{
        flex:1,
        margin:10,
    
        flexDirection:'row',

    },
    discountContainer:{
        flex:0.8,
        justifyContent:'center'
    },
    image:{
        flex:0.3
    },
    productInfo:{
     
    
        flex:0.7
    },

    discountWrapper:{
        flex:1,
        margin:10
    },
    typeDiscount:{
        width:100,
        height:30,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:35,
        borderColor:'lightgray',
        borderRadius:5

    },

})

export default Discount
