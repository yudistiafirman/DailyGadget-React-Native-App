import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { StyleSheet,Text,TouchableOpacity,View} from 'react-native'
import BlurContainer from '../../Components/BlurContainer/BlurContainer'
import MyInput from '../../Components/Myinput/Myinput'
import Button from '../../Components/Button/Button'



function ForgotPassword({navigation}) {
    return <BlurContainer>
                <View style={styles.title}>

                     <Logo/>
                     <Text style={styles.textTitle}>Forgot Your Password?</Text>
                     <Text style={styles.smallText}>Don't worry we gonna take care of you</Text>
                 

                </View>


                <View style={styles.inputContainer}>
                     <MyInput text="enter your mail" icon="envelope" size={22} bool={false}  />
                     
                </View>


                <View style={styles.buttonContainer}> 

                      <Button onPress={()=>navigation.navigate('Confirm')} variant="primary" label="Submit" />

                </View>
          </BlurContainer>

       

}

const styles= StyleSheet.create({
        title:{
            flex:1,
            justifyContent:'space-around',
            alignItems:'flex-start',
            margin:20
        },

        inputContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            margin:20,
        },
        buttonContainer:{
            flex:1,
            justifyContent:'flex-start',
            alignItems:'center'
        },
        textTitle:{
            fontSize:32,
            fontWeight:'bold'
        },
        smallText:{
            fontSize:12,
            marginTop:20
        },
        forgot:{
            textAlign:'right',
     
            marginRight:20,
            marginBottom:20,
            color:'blue',
            fontSize:12,
        }

})

export default ForgotPassword