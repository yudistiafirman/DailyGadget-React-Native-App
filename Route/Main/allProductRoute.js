import React from 'react'
import {createStackNavigator}from '@react-navigation/stack'
import Allproducts from '../../Screens/Allproducts/Allproducts'
import Discount from '../../Screens/Discount/Discount'
import EditProduct from '../../Screens/EditProduct/EditProduct'


const AllProductStack=createStackNavigator()

function allProductRoute() {
    return (
        <AllProductStack.Navigator>
                <AllProductStack.Screen name="allproducts" component={Allproducts}/>
                <AllProductStack.Screen name="discount" component={Discount}/>
                <AllProductStack.Screen name="editproduct" component={EditProduct}/>

        </AllProductStack.Navigator>
    )
}

export default allProductRoute
