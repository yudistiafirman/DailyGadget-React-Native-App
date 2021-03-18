import React,{useState} from 'react'
import { Text, View } from 'react-native'
import Badge from '../../Components/Badge/Badge'

import ModalTester from '../../Components/Modal/Modal'

function ProductInfo() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
            <View style={{flex:1,margin:10}}>
                    <View style={{flex:0.5,justifyContent:'space-around'}}>

                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                                    <Text style={{fontSize:16,fontWeight:'bold'}}>Product information</Text>
                                    <Badge text="New"/>


                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text>Stock</Text>
                                    <Text>{'>'}100</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text>Terjual</Text>
                                    <Text>{'>'}100</Text>
                            </View>

                    </View>
                    <View style={{flex:0.5,borderColor:'lightgray',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Description</Text>
                        <Text style={{marginTop:20,textAlign:'auto'}}>Ready Stock gan</Text>
                        <Text onPress={toggleModal} style={{textAlign:'center',color:'#7868e6',fontSize:16,fontWeight:'bold',position:'absolute',bottom:0,right:'40%'}}>See More</Text>
                        <ModalTester isVisible={isModalVisible}  onSwipeComplete={()=>setModalVisible(false)}/>

                    </View>
            </View>
    )
}

export default ProductInfo
