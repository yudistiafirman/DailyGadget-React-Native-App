import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import SellerDrawer from '../../Components/Drawer/SellerDrawer'
import { sellerData } from '../../Support/Constant/dataToMap'

function Seller({navigation}) {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
           {
                    sellerData.map((value, index) => {

                        return <SellerDrawer key={index} navigation={navigation} location={value.location} bgColor={value.bgColor} label={value.label} name={value.name} />
                    })
                }
    </SafeAreaView>
    )
}

export default Seller
