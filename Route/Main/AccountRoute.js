import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../../Screens/Auth/Auth';
import { useState } from 'react';
import Register from '../../Screens/Register/Register';
import Login from '../../Screens/Login/Login';
import ForgotPassword from '../../Screens/ForgotPassword/ForgotPassword';
import ConfirmPass from '../../Screens/ConfirmPass/ConfirmPass';

import ProfileNavigation from './UserRoleRoute';




const AccountStack = createStackNavigator()



const AccountRoute=()=>{

    const [isLoggedIn,SetisLoggedIn]=useState(false)

    const accountScreen = {
        Account:ProfileNavigation,
    }

    const authScreen={
        AuthScreen:Auth,
        Register:Register,
        Login:Login,
        Forgot:ForgotPassword,
        Confirm:ConfirmPass
    }

    return <AccountStack.Navigator  headerMode={null}>

{Object.entries({
   
    ...(isLoggedIn ? accountScreen : authScreen),
  }).map(([name, component]) => (
    <AccountStack.Screen  key={name} name={name} component={component} />
  ))}


    </AccountStack.Navigator>
    
}

export default AccountRoute