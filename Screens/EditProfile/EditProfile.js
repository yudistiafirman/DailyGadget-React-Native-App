import React, { useState } from 'react'
import {View,Image,TouchableOpacity,SafeAreaView,StyleSheet,}from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../../Components/Header/Header'
import InputCard from '../../Components/InputCard/InputCard'
import Button from '../../Components/Button/Button'
import BlurContainer from '../../Components/BlurContainer/BlurContainer'
import ImagePicker from 'react-native-image-crop-picker';
import CameraModal from '../../Components/CameraModal/CameraModal'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'

function EditProfile({navigation}) {

    const [open,SetOpen]=useState(false)
    const [preview,SetPreview]=useState(null)

    const onOpenCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
                    SetPreview(image.path)
          }).catch((err)=>{
              console.log(err)
          });
    }

    const onOpenLibarary=()=>{
        ImagePicker.openPicker({
            width:300,
            height:300,
            cropping:true
          
        }).then(image=>{
                SetPreview(image.path)
        }).catch((err)=>{
            console.log(err)
        })
    }

   
   return (
      <SafeAreaView style={{flex:1,justifyContent:'space-between',backgroundColor:'#ffff'}}>
         

           
          <ProfileHeader onLeftPress={()=>navigation.navigate('profile')} iconLeft="arrow-left" title="EDIT PROFILE" />
          <InputCard title="User Profile"/>
      
          <View  style={styles.userIcon} >
              {
                  preview?<Image source={{uri:preview}} style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:50}}/>
                                                    :
                                                    <Icon name="user" color="#f4f4f4" size={40}/>
              }

          </View>
   
          
          <TouchableOpacity onPress={()=>SetOpen(true)} style={styles.plusIcon}>
             <Icon name="plus" color="#f4f4f4" size={18}/>
         </TouchableOpacity>

         <View style={{marginBottom:100,alignItems:'center'}}>
             <Button variant="primary" label="SAVE CHANGES" />
         </View>

        <CameraModal isVisible={open} onOpenCamera={onOpenCamera} onOpenImage={onOpenLibarary} onSwipeComplete={()=>SetOpen(!open)}/>
       
         
      </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    userIcon:{alignItems:'center',
    justifyContent:'center', 
    width: 100, height: 100, 
    borderRadius: 60, 
    backgroundColor: 'white', 
    position: 'absolute', 
    top: 150, 
    left: 143, 
    right: 0, 
    bottom: 0, 
    borderWidth:1,
},
plusIcon:{alignItems:'center',
justifyContent:'center',
backgroundColor:"#29B6F6",
width:37,
height:37,
borderRadius:18.5,
position:'absolute',
top:200,
left:130,
right:0,
bottom:0
},
})

export default EditProfile
