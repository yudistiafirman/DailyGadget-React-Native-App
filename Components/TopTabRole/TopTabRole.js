import React from 'react'
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Topheader from './Topheader'


const TopTabRole = ({ state, descriptors, navigation, position }) => {
  
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
    return<SafeAreaView>
                <Topheader>

                     <View  style={styles.userPhoto} >
                         <Icon name="user" color="#ffffff" size={50}/>
                    </View>
                    <View>
                         <Text style={{textAlign:'center',fontWeight:'bold'}}>yudistia.firman@gmail.com</Text>

                    </View>
                    <View>
                    <Text style={{textAlign:'center',fontWeight:'bold'}}>saldo:</Text>
                    </View>

                    <View style={{flexDirection:'row',height:50,width:'100%',alignItems:'center',justifyContent:'space-between',marginLeft:5,marginRight:5,borderWidth:1,borderRadius:40,marginTop:15,borderColor:'#845ec2',}}>

           
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
   
      style={{ flex: 1,height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:isFocused?"#845ec2":'#ffff',borderTopLeftRadius:index===0?40:0,borderBottomLeftRadius:index===0?40:0,borderTopRightRadius:index===1?40:0,borderBottomRightRadius:index===1?40:0 }}
    >
      <Text  key={index} style={{fontSize:20,color:isFocused?"#ffff":'#845ec2'}}>
         
        {label}
      </Text>
    </TouchableOpacity>
  );
})}
 </View>
                

                </Topheader>
          </SafeAreaView> 

   



       
     

}

const styles = StyleSheet.create({
   userPhoto:{alignItems:'center',justifyContent:'center', width: 100, height: 100, borderRadius: 50, backgroundColor: '#f4f4f4',  }

})







           



export default TopTabRole