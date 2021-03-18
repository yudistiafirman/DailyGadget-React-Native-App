import React from 'react'
import {View,Text} from 'react-native'
import Badge from '../Badge/Badge';





function Spesification() {
    return (
        <View style={{height:250}}>

            <View style={{margin:10,flex:1}}>
                    <Text style={{fontSize:18,marginBottom:10}}>Spesification</Text>
                    <View style={{backgroundColor:'lightgray',flex:0.15,flexDirection:'row',alignItems:'center'}}>

                            <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{marginLeft:10}}>Category</Text>
                                

                            </View>
                            <View style={{flex:0.6}}>
                                <Text style={{color:'red'}}>Masker {'&'} Slayer</Text>
                            </View>

                    </View>
                    <View style={{backgroundColor:'white',flex:0.2,flexDirection:'row',alignItems:'center'}}>

                    <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{marginLeft:10}}>Condition</Text>
                                

                            </View>
                            <View style={{flex:0.6}}>
                                <Badge text="New"/>
                            </View>

                    </View>
                    <View style={{backgroundColor:'lightgray',flex:0.15,flexDirection:'row',alignItems:'center'}}>

                            <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{marginLeft:10}}>Weight</Text>
                                

                            </View>
                            <View style={{flex:0.6}}>
                                <Text style={{color:'#292929'}}>80 gram</Text>
                            </View>

                    </View>
                    <View style={{backgroundColor:'white',flex:0.2,flexDirection:'row',alignItems:'center'}}>

                            <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{marginLeft:10}}>Original</Text>
                                

                            </View>
                                <View style={{flex:0.6}}>
                                <Text style={{color:'#292929'}}>Import</Text>
                            </View>

                    </View>
                    <View style={{backgroundColor:'lightgray',flex:0.15,flexDirection:'row',alignItems:'center'}}>

                            <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{marginLeft:10}}>Brand</Text>
                                

                            </View>
                            <View style={{flex:0.6}}>
                            <Text style={{color:'#292929'}}>80 gram</Text>
                        </View>

                    </View>
                    
                    

            </View>
    </View>
    )
}

export default Spesification
