import React from 'react'
import { Text, TouchableOpacity, View ,StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function ProductImageUploader({label,onPress,images,onImagePress,errortext}) {

    const styles=StyleSheet.create({
        imageInputContainer:{height:140,marginTop:10},
        imageInputField:{flex:0.7,borderWidth:1,marginTop:10,borderStyle:'dashed',borderRadius:1},
        iconCameraContainer:{flex:0.2,backgroundColor:'#f0e4d7',justifyContent:'center',alignItems:'center',marginRight:10},
        error:{fontStyle:'italic',color:'red',fontSize:12}
    })
    return (
        <View style={styles.imageInputContainer}>
                                    
        <Text >{label}</Text>

        <View style={styles.imageInputField}>
            
                <View style={{margin:10,flex:1,flexDirection:'row'}}>
                    {
                        images.length>0?images.map((v,i)=>{
                            return <TouchableOpacity onPress={onImagePress} key={i} style={styles.iconCameraContainer}><Image style={{width:'100%',height:'100%',resizeMode:'stretch'}} source={{uri:v.path.slice(0,4)!=='file'?v.uri:v.path}}/></TouchableOpacity>
                        }):null
                    }
                    {
                        images.length<5?  <TouchableOpacity onPress={onPress} style={styles.iconCameraContainer}>
                                                <Icon name="camera" size={20} color="#292929" />
                                             </TouchableOpacity>
                                             :
                                             null
                    }
                  
                    <View style={{flex:0.8,marginLeft:15,marginTop:-5,display:images.length>0?"none":"flex"}}>
                   
                    <Text style={{fontSize:12,fontWeight:'bold',color:'#292929'}}>Upload Your Images</Text>
                    <Text style={{color:'lightgray',fontSize:12}}>maximum 5 images,format jpeg,jpg,png</Text>
                    <Text style={{color:'lightgray',fontSize:12}}>width 300px height 400px </Text>
                    
                    </View>
                    


                </View>
       
        </View>
        <Text style={styles.error}>{errortext}</Text>
    

        </View>
    )
}



export default ProductImageUploader
