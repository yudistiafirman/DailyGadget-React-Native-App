import React from 'react'
import {Image,StyleSheet, TouchableOpacity,Text} from 'react-native'

function SmallCard({source,onPress,text,variant}) {
    const styles=StyleSheet.create({
        button:{width:130,
            height:120,
            backgroundColor:variant==='category'?'#90ee90':'#B8D9FA',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            marginRight:10,
            marginTop:10,
            overflow:'hidden'
        },
        image:{
            width:'100%',
            height:'100%',
            resizeMode:'contain',
            transform:[{translateY:variant==='category'?10:0}]
        }
        
    })
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
              <Image style={styles.image} source={source}/>
              <Text style={{position:'absolute',top:0,left:4,fontSize:16,fontWeight:'bold'}}>{text}</Text>
      </TouchableOpacity>
    )
}



export default SmallCard
