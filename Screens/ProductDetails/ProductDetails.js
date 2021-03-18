import React from 'react'
import {  View,Dimensions, ScrollView, SafeAreaView,Text } from 'react-native'
import ImageList from './ImageList'
import{imagesData}from '../../Support/Constant/dataToMap'
import Description from './Details'
import ProductInfo from './ProductInfo'
import ProductCard from '../../Components/ProductCard/ProductCard'
import HeaderButton from './HeaderButton'
import AnotherProduct from './AnotherProduct'




const { width } = Dimensions.get('window')
function ProductDetails() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#ffff"}}>
            <ScrollView style={{flex:1}}>
                        <ImageList width={width} image={imagesData} />
                        
                        <View style={{height:120,borderColor:'lightgrey',borderTopWidth:1}}>
                             <Description/>
                        </View>
                        <View style={{height:300,borderColor:'lightgrey',borderTopWidth:1}}>
                                <ProductInfo/>
                        </View>
                        <View style={{height:430,borderTopWidth:1,borderColor:'lightgrey'}}>
                            <AnotherProduct/>
                        </View>
                         
            </ScrollView>
                             
                
                   
       
        </SafeAreaView>
    )
}

export default ProductDetails
