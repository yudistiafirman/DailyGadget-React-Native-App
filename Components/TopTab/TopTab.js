
import React from 'react'
import { View, TouchableOpacity,Text,SafeAreaView } from 'react-native';

import Header from '../Header/Header'
import ProfileHeader from '../ProfileHeader/ProfileHeader';

export default function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <SafeAreaView style={{ flexDirection: 'column',height:'20%',backgroundColor:'#ffff' }}>
        
        <ProfileHeader onLeftPress={()=>navigation.navigate('profile')} iconLeft="arrow-left" title="Transactions" />
      
            <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'space-between',marginLeft:5,marginRight:5,borderWidth:1,borderRadius:40,marginTop:15,borderColor:'#845ec2'}}>

           
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

    
        
      

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
         
            style={{ flex: 1,height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:isFocused?"#845ec2":'#ffff',borderTopLeftRadius:index===0?40:0,borderBottomLeftRadius:index===0?40:0,borderTopRightRadius:index===3?40:0,borderBottomRightRadius:index===3?40:0 }}
          >
            <Text  key={index} style={{fontSize:20,color:isFocused?"#ffff":'#845ec2'}}>
               
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
       </View>
    </SafeAreaView>
  );
}



