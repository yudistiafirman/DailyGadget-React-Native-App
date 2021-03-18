import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Activity from '../../Screens/Activity/Acitivity'
import Wishlist from '../../Screens/WishList/Wishlist'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import TabBar from '../../Components/TabLogo/TabBar'
import AccountRoute from './AccountRoute'
import DashBoardRoute from './DashboardRoute'





    

const Tab=createBottomTabNavigator()
const HomeStack=()=>{
       return <Tab.Navigator  initialRouteName="home" tabBar={props => <TabBar state={props.state} descriptors={props.descriptors} navigation={props.navigation} />} >
             <Tab.Screen name='home' component={DashBoardRoute} />
            <Tab.Screen name='activity' component={Activity} />
            <Tab.Screen name='wishlist' component={Wishlist} />
            <Tab.Screen name='account'  component={AccountRoute} />
    

        </Tab.Navigator>
}

export default HomeStack