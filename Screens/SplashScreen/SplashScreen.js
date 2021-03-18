import React from 'react'
import {SafeAreaView,Image,StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Logo from '../../Support/Svg/leftPattern.svg'


const  SplashScreen=({navigation}) =>{
    return (

    <SafeAreaView style={style.container}>
        <View style={style.background}>
              <Logo />
        </View>

        <View style={style.slogan}>

            <View style={style.background}>
                    <Image style={{width:250,height:250}} source={require('../../Support/Images/Pman.png')}/>
            </View>

        </View>
     
        


        <View style={style.sloganSubTextContainer}>
            <Text>its now very easy to reach </Text>
            <Text>the best quality among all</Text>
        </View>
          
           
    

            <TouchableOpacity onPress={()=>navigation.navigate('home')} style={style.button}>

            <Text>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  
  )
}

const style=StyleSheet.create({
  container:{
      flex:1,
        justifyContent:'center',
      backgroundColor:'#ffff',
      alignItems:'center'
  },
  background:{
      position:'absolute',
        borderRadius:150,
        overflow:'hidden',

  
  },
  slogan:{

      width:300,
      height:300,

      justifyContent:'center',
      alignItems:'center'

  },
  sloganTextContainer:{
   
     height:'50%',
     width:'100%',

  },
  Slogantext:{
      fontSize:32,
      fontWeight:'bold',
      textAlign:'center'
  },
  sloganSubTextContainer:{
    

  },
  button:{
      width:'60%',
      height:40,
      backgroundColor:'#B8D9FA',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginTop:30
  
  },
  subImageCont:{

      justifyContent:'flex-start',
      alignItems:'center',
      paddingTop:20
    
    
  },
  subImage:{
      width:50,
      height:50,
  },
  mitraText:{
      fontWeight:'bold'
  }
})
export default SplashScreen



    
 
   
        
       
      
