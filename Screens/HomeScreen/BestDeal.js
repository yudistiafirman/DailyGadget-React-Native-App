import React from 'react'
import {Text, View, ScrollView,} from 'react-native'

import Icon  from 'react-native-vector-icons/Ionicons'
import ProductCard from '../../Components/ProductCard/ProductCard'

function BestDeal() {
    return (
     
        <View style={{flex:1,justifyContent:'center',marginTop:20}}>

        <Text style={{fontSize:20,fontWeight:'bold',fontStyle:'italic',marginBottom:10}}>Best Deals for you <Icon name="md-thumbs-up" color="#b4aee8" size={24}/> </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                   
        <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
        <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
        <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
        <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
        <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
    </ScrollView>


 </View> 
    )
}

export default BestDeal
