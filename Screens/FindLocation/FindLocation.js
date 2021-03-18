import React,{useEffect, useState} from 'react'
import { View,Text, SafeAreaView ,StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, {Marker}from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios'
function FindLocation({navigation}) {

    const [location,SetCurrentLocation]=useState({
        latitude:  37.4219983,
        longitude: -122.084,
    })

    const [address,SetAddress]=useState('')
    const {latitude,longitude}=location


  const currentLocation=()=>{
    Geolocation.getCurrentPosition(
        (position) => {
                SetCurrentLocation({...location,latitude:position.coords.latitude,longitude:position.coords.longitude})
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );


  }
        
  useEffect(()=>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBs8dJFlwBNqroev9zLOvB035XbZTZvH44`)
                .then((response)=>{
                    console.log(response.data)
                }).catch((err)=>{
                    console.log(err)
                })
  },[address])
       
     
     
   
       
           
            

        
    

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                <ProfileHeader iconLeft="arrow-left" title="find your location" onLeftPress={()=>navigation.navigate('Addaddress')}/>

                <View style={{flex:0.8}}>
                      <MapView style={styles.map} loadingEnabled={true} showsUserLocation={true} region={{latitude:latitude,longitude:longitude,latitudeDelta: 0.0043,longitudeDelta: 0.0034}}>
                      <Marker coordinate={{latitude:latitude,longitude:longitude}}/>
                          
                      </MapView>
                </View>
                <TouchableOpacity onPress={currentLocation} style={{backgroundColor:'#f7d9d9',position:'absolute',width:40,height:40,borderRadius:10,justifyContent:'center',alignItems:'center',bottom:150,right:20}}>

                                <Icon name="target" color="#292929" size={40}/>

            </TouchableOpacity>

            <TextInput value={address} onChangeText={(text)=>SetAddress(text)}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
export default FindLocation
