import React from 'react'
import {Text, View, ScrollView,} from 'react-native'
import SmallCard from '../../Components/SmallCard/SmallCard'
import {  category } from '../../Support/Constant/dataToMap'

function Category() {
    return (
    <View style={{flex:0.3,justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Categories</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {
                category.map((v,i)=><SmallCard variant="category" source={v.images} text={v.text} key={i}/>)
            }
        </ScrollView>
   </View>          
       
    )
}

export default Category
