import React from 'react'
import {Text, View,Image,StyleSheet} from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
function ProductCard({src,originalPrice,discount,product_name,product_price}) {


    const styles=StyleSheet.create({
        cardContainer:{
                    borderWidth:1,
                    borderColor:'lightgray',
                    width:180,
                    height:300,
                    marginRight:10,
                    borderRadius:10},
        imageContainer:{
                    flex:0.6,
                    justifyContent:'center',
                    alignItems:'center'},
        image:{
                    resizeMode:'contain',
                    width:'100%',
                     height:'100%'},
        productName:{
                   fontWeight:'bold',
                   fontSize:14
                   },
         price:{
                    fontWeight:'bold',
                    fontSize:18,
                    color:discount?'red':"#292929"
                    },
        discountContainer:{
                    display:discount?"block":"none",
                    height:25,
                    flexDirection:'row'},
        original:{
                     fontWeight:"600",
                     textDecorationLine: 'line-through',
                    textDecorationStyle: "solid"
                 },
       discounted:{
                    marginLeft:10,
                    color:'red'
                    },
        rating:{
             flexDirection:'row',
             alignItems:'center'}
        
        

    })


    return (
        <View style={styles.cardContainer}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={src}/>
            </View>
                        
            <View style={{flex:0.4}}>

                <View style={{flex:1,margin:5}}>
                    <Text style={styles.productName}>{product_name}</Text>
                    <Text style={styles.price}>{product_price}</Text>

                    <View style={styles.discountContainer}>
                        <Text style={styles.original}>{originalPrice}</Text>
                        <Text style={styles.discounted}>{discount}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text>rating:</Text>
                        <Icon name="ios-star" color="yellow"/>
                        <Icon name="ios-star" color="yellow"/>
                        <Icon name="ios-star" color="yellow"/>
                        <Icon name="ios-star" color="yellow"/>
                        <Icon name="ios-star" color="yellow"/>
                    </View>
                </View>
                   


             
       </View>


</View>
    )
}



export default ProductCard
