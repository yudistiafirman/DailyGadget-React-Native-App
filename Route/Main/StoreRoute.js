import React from 'react'
import {createStackNavigator}from '@react-navigation/stack'
import Addproduct from '../../Screens/Addproduct/Addproduct'
import Allproducts from '../../Screens/Allproducts/Allproducts'
import Statistics from '../../Screens/Statictics/Statistics'
import Draft from '../../Screens/Draft/Draft'
import allProductRoute from './allProductRoute'
import Discount from '../../Screens/Discount/Discount'
import EditProduct from '../../Screens/EditProduct/EditProduct'


const StoreStack=createStackNavigator()

const StoreRoute=()=>{
    return <StoreStack.Navigator headerMode={null}>
                    <StoreStack.Screen name="AddProduct" component={Addproduct}/>
                    <StoreStack.Screen name="allproducts" component={Allproducts}/>
                    <StoreStack.Screen name="statictics" component={Statistics}/>
                    <StoreStack.Screen name="Draft" component={Draft}/>
                    <StoreStack.Screen name="discount" component={Discount}/>
                    <StoreStack.Screen name="editproduct" component={EditProduct}/>
           </StoreStack.Navigator>
}

export default StoreRoute