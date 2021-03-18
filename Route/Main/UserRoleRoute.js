import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileRoute from './ProfileRoute'
import Seller from '../../Screens/Seller/Seller';
import {createStackNavigator}from '@react-navigation/stack'
import TopTabRole from '../../Components/TopTabRole/TopTabRole';

import Account from '../../Screens/Account/Account';
import StoreRoute from './StoreRoute';







const UserRole= createMaterialTopTabNavigator()

const UserRoleroute=()=>{
    return <UserRole.Navigator tabBar={props=><TopTabRole {...props}/>}>
                    <UserRole.Screen  name="Your Credential" component={Account}/>
                    <UserRole.Screen name="Your Store" component={Seller}/>

            </UserRole.Navigator>
}

const ProfileNav = createStackNavigator()
const ProfileNavigation =()=>{
  return <ProfileNav.Navigator headerMode={null}>
              <ProfileNav.Screen name="profile" component={UserRoleroute}/>
              <ProfileNav.Screen name="subprofile"component={ProfileRoute}/>
              <ProfileNav.Screen name='store' component={StoreRoute}/>


      </ProfileNav.Navigator>
}

export default ProfileNavigation