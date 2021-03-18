import  React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../Screens/Account/Account';
import EditProfile from '../../Screens/EditProfile/EditProfile';
import ProfileTransRoute from './profileTransRoute';
import Address from '../../Screens/Address/Address';
import Security from '../../Screens/Security/Security';
import BankAccount from '../../Screens/BankAccount/BankAccount';
import AddAddress from '../../Screens/AddAddress/AddAddress';
import FindLocation from '../../Screens/FindLocation/FindLocation';


const ProfileStack= createStackNavigator()





function ProfileRoute(){
    
  return  <ProfileStack.Navigator  headerMode={null}>
       
        <ProfileStack.Screen  name="Edit" component={EditProfile}/>
        <ProfileStack.Screen name="Transactions" component={ProfileTransRoute}/>
        <ProfileStack.Screen  name="Address" component={Address}/>
        <ProfileStack.Screen name="Security" component={Security}/>
        <ProfileStack.Screen name="Policy" component={BankAccount}/>
        <ProfileStack.Screen name="Addaddress" component={AddAddress}/>
        <ProfileStack.Screen name="location" component={FindLocation}/>

    </ProfileStack.Navigator>
}


export default ProfileRoute