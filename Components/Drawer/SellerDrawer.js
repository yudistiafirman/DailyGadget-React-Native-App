import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RectButton } from 'react-native-gesture-handler'



const SellerDrawer = ({ navigation, label, bgColor, name,location,logout }) => {
   
    return (
        <RectButton onPress={label==="sign out"?logout:()=>navigation.navigate('store',{screen:location})} style={{ borderRadius: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }} >
                <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: bgColor, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={name} color="white" size={20} />
                </View>
                <Text style={{ marginLeft: 20 }}>{label}</Text>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>

                    <Icon name="chevron-right" size={25}/>
                    </View>
            </View>
        </RectButton>
    )
}


export default SellerDrawer