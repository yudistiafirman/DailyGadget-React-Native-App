import React, { useEffect, useState } from 'react'
import Logo from '../../Components/Logo/Logo'
import { StyleSheet,Text,TouchableOpacity,View,KeyboardAvoidingView} from 'react-native'
import BlurContainer from '../../Components/BlurContainer/BlurContainer'
import MyInput from '../../Components/Myinput/Myinput'
import Button from '../../Components/Button/Button'
import { ValidateEmail, ValidatePassword } from '../../Functions/validator'



function Register({navigation}) {

    //email state and logic
    const [email,SetEmail]=useState({
        emailValue:'',
        emailError:'',
        emailFocus:false,
    })

    const {emailValue,emailError,emailFocus}=email

 //password state and logic

    const [password,SetPassword]=useState({
        passwordValue:'',
        passwordError:'',
        passwordFocus:false,
        showPassword:false
    })


    const {showPassword,passwordValue,passwordError,passwordFocus}=password

 

    //confirm password state and logic

    const [confirmPassword,SetconfirmPassword]=useState({
        conPasswordValue:'',
        confirmPasswordError:'',
        conPasswordFocus:false,
        showconPassword:false
    })

    const {showconPassword,conPasswordValue,confirmPasswordError,conPasswordFocus}=confirmPassword

  
    

    return <BlurContainer>
                <View style={styles.title}>

                     <Logo/>
                     <Text style={styles.textTitle}>Let's Register</Text>
                     <Text style={styles.smallText}>do you have an account? <Text onPress={()=>navigation.push('Login')} style={{color:'blue'}}>Login</Text></Text>
                 

                </View>


                <View style={styles.inputContainer}>
                     <MyInput
                     onChangeText={(text)=> SetEmail({...email,emailError:!ValidateEmail(text)?'wrong format email':'',emailValue:text})} 
                     focus={emailFocus} 
                     onFocus={()=>SetEmail({...email,emailFocus:true})} 
                     onBlur={()=>  SetEmail({...email,emailError:emailValue===''?'email form cannot be empty':!ValidateEmail(emailValue)?'wrong format email':'',emailFocus:false})}  
                     text="enter your mail" 
                     icon="email" 
                     size={22} 
                     isPass={false}  />
                    <Text style={styles.errorText}>{emailError}</Text>

                    <MyInput 
             
                    onChangeText={(text)=>SetPassword({...password,passwordValue:text,passwordError:!ValidatePassword(text)?'wrong format password':''})} 
                    focus={passwordFocus} 
                    isPass={!showPassword} 
                    onFocus={()=>SetPassword({...password,passwordFocus:true})} 
                    onBlur={()=> SetPassword({...passwordValue,passwordError:passwordValue===''?'password form cannot be empty':!ValidatePassword(passwordValue)?'wrong format password':'',passwordFocus:false})}  
                    text="enter your password" 
                    icon="lock" 
                    onPressIcon={()=>SetPassword({...password,showPassword:!showPassword})}
                    iconRight={showPassword?'eye-outline':'eye-off-outline'}
                     iconRightSize={22}
                    size={22} 
                />
                    <Text style={styles.errorText}>{passwordError}</Text>

                     <MyInput 
                
                     onChangeText={(text)=>SetconfirmPassword({...confirmPassword,conPasswordValue:text,confirmPasswordError:passwordValue!==conPasswordValue?'password and confirm password dont match':''})} 
                     focus={conPasswordFocus} 
                     isPass={!showconPassword} 
                     text="confirm your password" 
                     onFocus={()=>SetconfirmPassword({...confirmPassword,conPasswordFocus:true})} 
                     onBlur={()=>      SetconfirmPassword({...confirmPassword,confirmPasswordError:conPasswordValue===''?'confirm password form cannot be empty':conPasswordValue!==passwordValue?'password and confirm password dont match':'',conPasswordFocus:false})}  
                     icon="lock" 
                     iconRight={showconPassword?'eye-outline':'eye-off-outline'}
                     onPressIcon={()=>SetconfirmPassword({...confirmPassword,showconPassword:!showconPassword})}
                     iconRightSize={22}
                     size={22} 
               />
                    <Text style={styles.errorText}>{confirmPasswordError}</Text>
                </View>


                <View style={styles.buttonContainer}> 

                      <Button variant="primary" label="Sign Up" />

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
            flex:1.5,
            justifyContent:'center',
            
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
        errorText:{
            color:'red',
            fontStyle:'italic',
            fontSize:12
        }

})

export default Register
