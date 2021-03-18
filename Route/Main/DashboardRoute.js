import  React from 'react';

import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import ProductDetails from '../../Screens/ProductDetails/ProductDetails';
import HomeHeader from '../../Screens/HomeScreen/HomeHeader';
import HeaderButton from '../../Screens/ProductDetails/HeaderButton';


const DashBoard=createStackNavigator()


const DashBoardRoute=()=>{
    return <DashBoard.Navigator >
                <DashBoard.Screen name="home" options={{
                headerTitle: props=><HomeHeader {...props}/>,
                headerLeft:null }} component={HomeScreen}/>
                <DashBoard.Screen options={{headerTitle:props=><HeaderButton {...props}/>}} name="Productdetails" component={ProductDetails}/>

         </DashBoard.Navigator>
}

export default DashBoardRoute