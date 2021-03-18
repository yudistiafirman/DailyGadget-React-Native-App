import React from 'react'
import { ScrollView,Text,View } from 'react-native'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function AnotherProduct() {
    return (
 <View style={{margin:10,flex:1}}>
         <Text style={{fontSize:16,fontWeight:'bold',marginTop:20,marginBottom:20}}> Another Product from this seller </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
            <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
            <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
            <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
            <ProductCard src={require('../../Support/Images/iphone.png')} product_name="samsung s9 in your dream only" product_price="98rb"/>
          </ScrollView>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                <Text style={{fontSize:16,color:'#7868e6'}}>See all product from this seller</Text>
                <Icon name="chevron-double-right" color="#7868e6" size={20}/>
        </View>
 </View>
    )
}

export default AnotherProduct
