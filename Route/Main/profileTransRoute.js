import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Alltransaction from '../../Screens/alltransaction/all/Alltransaction';
import SuccessTransactions from '../../Screens/alltransaction/success/Success';
import PendingTransactions from '../../Screens/alltransaction/pending/Pending';
import FailedTransactions from '../../Screens/alltransaction/failed/Failed';

import MyTabBar from '../../Components/TopTab/TopTab';


const ProfileTransTab = createMaterialTopTabNavigator();

function ProfileTransRoute() {
  return (
        <ProfileTransTab.Navigator tabBar={props=><MyTabBar {...props}/>}  >
            <ProfileTransTab.Screen name="all" component={Alltransaction}/>
            <ProfileTransTab.Screen name="success" component={SuccessTransactions}/>
            <ProfileTransTab.Screen name="delay" component={PendingTransactions}/>
            <ProfileTransTab.Screen name="failed" component={FailedTransactions}/>
          
        </ProfileTransTab.Navigator>
  );
}

export default ProfileTransRoute