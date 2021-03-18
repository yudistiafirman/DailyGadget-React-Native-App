import React from 'react'
import { StyleSheet,Text,TouchableOpacity,View} from 'react-native'

import BlurContainer from '../../Components/BlurContainer/BlurContainer';
import Logo from '../../Components/Logo/Logo';





function Auth({navigation}) {
    return (
            <BlurContainer>

            <Logo/>
         
            <View style={{flex:1,alignItems:'center'}}>

                <Text style={styles.Slogan}>The Right Address</Text>
                <Text style={styles.Slogan}>For Trading Gadget</Text>
                <Text style={styles.Slogan}>AnyDay</Text>

           </View>

           <View style={styles.buttonContainer}>
               
                <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.button}>
                        <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{...styles.button,backgroundColor:'#000759'}}>
                        <Text style={{color:'#ffff'}}>Login</Text>
                </TouchableOpacity>

          </View>

            </BlurContainer>
      
             

    )
}


const styles=StyleSheet.create({


 
    Slogan:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center'
    },
    button:{
        width:'60%',
        height:40,
        backgroundColor:'#B8D9FA',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:10
    },
    secondButton:{
        backgroundColor:'#000759'
    },
 
    buttonContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    }
})


export default Auth
