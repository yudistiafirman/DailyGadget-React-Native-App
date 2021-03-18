/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Route/Main/MainRoute';
import TabBar from './Components/TabLogo/TabBar';


const App = () => {
  return (
    <NavigationContainer>
                <Main/>
    </NavigationContainer>
             
 
    );
  };

       
     



export default App;
