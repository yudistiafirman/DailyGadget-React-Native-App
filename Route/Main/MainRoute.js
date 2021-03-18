import  React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../Screens/SplashScreen/SplashScreen';
import HomeStack from '../../Route/Main/HomeRoute'



const Stack = createStackNavigator();

function Main(){
    return <Stack.Navigator  headerMode={null} >
            <Stack.Screen name="splash" component={SplashScreen}/>
            <Stack.Screen name="home" component={HomeStack}/>
         
    </Stack.Navigator>
}

export default Main