import React, { useEffect, useState } from 'react'
import { View,StyleSheet, FlatList, TouchableOpacity,Text, TouchableHighlight } from 'react-native'
import { filterOption } from '../../Support/Constant/dataToMap'
import ModalProductCategory from '../ModalProductCategory/ModalProductCategory'
import ModalProductDescription from '../ModalProductDescription/ModalProductDescription'



function ModalFilter({onLeftPress,isVisible,value,onValueChange}) {

        const [idx,SetIndex]=useState(0)
        const [dataIndex,SetdataIndex]=useState({
            idx_1:null,
            idx_2:null
        })
      const{idx_1,idx_2}=dataIndex
       

      
        
           
          
        

        const checkValueChange=(itemidx,dataidx)=>{
         
                if(itemidx!==null&&dataidx!==null){
                const filterData= filterOption[itemidx].data
                filterData.map((v,i)=>{
                    if(i===dataidx){
                        v.isChecked=true
                    }else{
                        v.isChecked=false
                    }
                })
                }
          
        }
        checkValueChange(idx_1,idx_2)
    return <ModalProductCategory headerTitle="Filter" isVisible={isVisible} onLeftPress={onLeftPress} >
                <View style={{flex:0.9,flexDirection:'row'}}>

                    <View style={{flex:0.4,backgroundColor:'#faf3e0'}}>

                        <FlatList data={filterOption} renderItem={({index,item})=> {return <TouchableHighlight
                        underlayColor="white"
                        onPress={()=>SetIndex(Number(index))} style=
                        {{borderColor:'lightgray',
                         height:100,borderBottomWidth:1,
                         borderLeftWidth:Number(index)===idx?0:1,
                         justifyContent:'center',
                         alignItems:'center' ,
                         backgroundColor:Number(index)===idx?"#ffff":'#faf3e0'}}>
                         <Text>{item.title}</Text>
                        </TouchableHighlight> }} 
                        keyExtractor={(item)=>item.id}
                        />

                    </View>
                <View style={{flex:0.6}}>
                    
                    <FlatList data={filterOption} renderItem={({index,item})=>{
                         return    item.data.map((v,i)=>{  
                          
                    return index===idx&&<View key={i} style={{
                     
                         height:100,
                         flexDirection:'row',
                         justifyContent:'space-between',
                         alignItems:'center' ,
                         backgroundColor:'white'
                    }}>
                         <Text style={{flex:0.5,marginLeft:20}} >{v.option}</Text>
                         <View style={{flex:0.5,flexDirection:'row',justifyContent:'center'}}>
                           <TouchableOpacity style={{
                               width:23,height:23,
                               borderWidth:1,borderRadius:23,
                               justifyContent:'center',
                               alignItems:'center'}}  
                               onPress={()=>SetdataIndex({idx_1:index,idx_2:i})} >
                                    
                                      <View style={{
                                          width:15,
                                          height:15,
                                          borderRadius:15,
                                          backgroundColor:'red',
                                          display:v.isChecked?'flex':'none'}}/>
                                    

                           </TouchableOpacity>
                         </View>
                      
                         </View>
                         })
                         
                       
                    }} keyExtractor={(item)=>item.id}/>
                        
                 </View>

                </View>

                <View style={{borderWidth:1,borderColor:'lightgray',flex:0.1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:200,borderRadius:5,height:50,backgroundColor:'#fa1e0e',justifyContent:'center',alignItems:'center'}}>
                             <Text style={{color:'#ffff'}}>Apply Filter</Text>
                    </TouchableOpacity>
                     
                </View>
         </ModalProductCategory>
}

export default ModalFilter
