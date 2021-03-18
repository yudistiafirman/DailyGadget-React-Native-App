import React from 'react'
import {Text, View, ScrollView,} from 'react-native'
import SmallCard from '../../Components/SmallCard/SmallCard'
import { brands } from '../../Support/Constant/dataToMap'
function Brands({navigation}) {
    return (
        <View style={{flex:0.4,justifyContent:'center',marginTop:20}}>

             <Text style={{fontSize:20,fontWeight:'bold'}}>Brands</Text>

             <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
                  <View style={{flexDirection:'row',width:560,flexWrap:'wrap'}}>
                      {
                         brands.map((v,i)=><SmallCard onPress={()=>navigation.navigate(v.navigate)} key={i} source={v.images} />)
                      }
                  </View>
            </ScrollView>
     </View> 
    )
}

export default Brands
