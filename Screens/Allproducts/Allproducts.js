import React, { useState } from 'react'
import {View,Text, SafeAreaView, ScrollView,Animated} from 'react-native'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCountBadge from '../../Components/ProductCountBadge/ProductCountBadge'
import ProductStoreCard from '../../Components/ProductStoreCard/ProductStoreCard'
import ModalFilter from '../../Components/ModalFilter/ModalFilter'
import ModalSorting from '../../Components/ModalSorting/ModalSorting'
import ModalProductInfo from '../../Components/ModalProductInfo/ModalProductInfo'
function Allproducts({navigation}) {

    const [isVisible,SetIsVisible]=useState(false)
    const [isSortingVisible,SetisSortingVisible]=useState(false)
    const [isProductInfo,SetisProductInfo]=useState(false)

    return (
            <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                <ProfileHeader iconLeft="arrow-left" title="Products" onLeftPress={()=>navigation.goBack()} onRightPress={()=>navigation.navigate('AddProduct')}  IconRight="plus"/>
                <ScrollView style={{margin:10}}>
                

                        <Navbar  onSort={()=>SetisSortingVisible(true)} onFilter={()=>SetIsVisible(true)}/>
                        <ProductCountBadge/>
                        <ProductStoreCard onPress={()=>SetisProductInfo(true)}/>
                        <ProductStoreCard/>

                        <ModalFilter isVisible={isVisible} onLeftPress={()=>SetIsVisible(false)}/>
                        <ModalSorting isVisible={isSortingVisible} onSwipeComplete={()=>SetisSortingVisible(false)} onLeftPress={()=>SetisSortingVisible(false)}/>
                        <ModalProductInfo isVisible={isProductInfo} onDiscountNavigation={()=>{
                            SetisProductInfo(false)
                            navigation.navigate('discount')}} onEditNavigation={()=>{
                                SetisProductInfo(false)
                                navigation.navigate('editproduct')}} onSwipeComplete={()=>SetisProductInfo(false)} onLeftPress={()=>SetisProductInfo(false)}/>
                </ScrollView>
            </SafeAreaView>
    )
}

export default Allproducts