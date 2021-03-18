import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const Description = ({ item }) => {


    return <View style={{ flex: 1 ,margin:10,justifyContent:'space-between' }}>
        <Text style={{ fontSize: 20, color: '#292929', fontWeight: '700' }}>Rp.20.000</Text>
        <Text style={{ fontSize: 14, color: '#292929',fontWeight: '700' }}>Samsung S9 in your Dream</Text>
        
        <View style={{flexDirection:'row',alignItems:'center'}}>
                     
            <Icon name="ios-star" color="yellow" size={15}/>
            <Text style={{fontWeight:'bold',marginLeft:5}}>4.8/</Text>
            <Text style={{color:'lightgrey'}}>5</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                 <Icon name="md-rocket" size={15} color="red"/>
                 <Text style={{fontSize:12,marginLeft:5}} >delivery fee start from Rp.2000 to North Sumedang</Text>
            </View>
          
            <Icon name="md-send" color="lightgrey"/>
        </View>

    </View>
}

export default Description