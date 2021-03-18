import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert, TouchableHighlight, TouchableWithoutFeedbackComponent } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {FindRoutes} from '../../Functions/findRoutes'
function TabBar({ state, navigation,descriptors }) {

    const [animeValue,SetAnimeValue]=useState(0)
    const [isAnimated,SetIsAnimated]=useState(false)
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
 
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    
    const buttonSize=new Animated.Value(1)
    const mode =new Animated.Value(0)


 
useEffect(()=>{


    
   
    Animated.sequence([
        Animated.timing(buttonSize,{
            toValue:0.95,
            duration:50,
            useNativeDriver:true
        }),
        Animated.timing(buttonSize,{
            toValue:1,
            useNativeDriver:true
        }),
        Animated.timing(mode,{
            toValue:isAnimated?1:0,
            useNativeDriver:false
            
        }),
        
    ]).start()
},[isAnimated])
     
       


    const onPressButton=(e)=>{
            
            SetIsAnimated(!isAnimated)
       
     
 

     
    }
      const sizeStyle={
          transform:[{scale:buttonSize}]
      }

      const rotation=mode.interpolate({
          inputRange:[0,1],
          outputRange:['0deg','45deg']

      })

      const homeX=mode.interpolate({
          inputRange:[0,1],
          outputRange:[310,240]
      })

      const homeY=mode.interpolate({
        inputRange:[0,1],
        outputRange:[0,20]
    })
    
    const openidX=mode.interpolate({
        inputRange:[0,1],
        outputRange:[310,250]
    })

    const openidY=mode.interpolate({
      inputRange:[0,1],
      outputRange:[0,-30]
  })
  const heartbeatX=mode.interpolate({
    inputRange:[0,1],
    outputRange:[310,285]
})

const heartbeatY=mode.interpolate({
  inputRange:[0,1],
  outputRange:[0,-70]
})
const userX=mode.interpolate({
    inputRange:[0,1],
    outputRange:[310,335]
})

const userY=mode.interpolate({
  inputRange:[0,1],
  outputRange:[0,-85]
})


if(FindRoutes(state)){
    return null
}
      


      return  <View style={styles.tabBarContainer}>
            {
              state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onPress = () => {
                 
             
                            navigation.navigate(route.name)
                            SetAnimeValue(0)
                           
               
                }
                const prop = [
                    {
                        icon:'home',
                        animeX:homeX,
                        animeY:homeY
                    },
                    {
                        icon:'openid',
                        animeX:openidX,
                        animeY:openidY
                    },
                    {
                        icon:'heartbeat',
                        animeX:heartbeatX,
                        animeY:heartbeatY
                    },
                    {
                        icon:'user-o',
                        animeX:userX,
                        animeY:userY
                    }
                ]
                return   <Animated.View key={index} style={{position:'absolute',left:prop[index].animeX,top:prop[index].animeY}}>

                             <TouchableWithoutFeedback accessibilityRole="button" onPress={onPress} >

                                 <View style={styles.secondaryButton}>
                                    <Icon name={prop[index].icon} size={24} color="#ffff"/>
                                 </View>
                                    
                            </TouchableWithoutFeedback>

                         </Animated.View>
              })
          }

                        <Animated.View style={[styles.button,sizeStyle]}>

                             <TouchableOpacity  onPress={onPressButton} style={styles.innerButton} underlayColor="#7f58ff" >
                                <Animated.View style={{transform:[{rotate:rotation}]}}>
                                        <Icon name="plus" size={30} color="#ffff"/>
                                </Animated.View>
                             </TouchableOpacity>
                                   
                         </Animated.View>
                </View>
 

                    

                  
   
}
                
const styles = StyleSheet.create({

    tabBarContainer:{
        position: 'absolute',
        alignItems:'center',
        bottom: 0,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button:{
        width:72,
        height:72,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:36,
        backgroundColor:"#7f58ff",
        shadowColor:'#7f58ff',
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        top:-20,
        left:140
       

    },
    innerButton:{
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,borderColor:'white',
        borderRadius:32.5,
     
       
    },

    secondaryButton:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:'#7f58ff'
    }


}
    )


export default TabBar

                    
                            




                 
              






