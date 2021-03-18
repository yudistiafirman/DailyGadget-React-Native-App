import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProductInfoToEdit from '../../Components/ProductInfoToEdit/ProductInfoToEdit'
import ConfirmBtn from '../../Components/ConfirmBtn/ConfirmBtn'
import { brandName, brands, editProductOptions, selectCategory } from '../../Support/Constant/dataToMap'
import ModalEditProductName from '../../Components/ModalEditProductName/ModalEditProductName'
import ModalProductCategory from '../../Components/ModalProductCategory/ModalProductCategory'
import Options from '../../Components/Options/Options'
import ModalProductDescription from '../../Components/ModalProductDescription/ModalProductDescription'
import ModalProductSpecifiction from '../../Components/ModalProductSpecification/ModalProductSpecifiction'
import { Picker } from '@react-native-picker/picker'
import SmallCard from '../../Components/SmallCard/SmallCard'
import ModalProductDetail from '../../Components/ModalProductDetail/ModalProductDetail'
import InputEditProductDetails from '../../Components/InputEditProductDetails/InputEditProductDetails'

function EditProduct({navigation}) {

//open modal state and logic
    const [formData,SetformData]=useState({
        product_name:false,
        category:false,
        specification:false,
        product_detail:false,
        product_description:false,
    })

  
    const {product_name,category,specification,product_detail,product_description}=formData

    const onOpenModalItem=(text)=>{
        SetformData({...formData,[text]:true})
    }
//edit product name state and logic
    const [productNameValue,SetProductName]=useState('')

    
//edit category state and logic

const [editCategory,SeteditCategory]=useState('')

//edit product description state and logic

const [editDescription,SetEditDescription]=useState('')

//edit product specification state and logic

const [editSpecification,SeteditSpecification]=useState('')

//edit product detail state and logic

const [editProductDetail,SeteditProductDetal]=useState({
    price:'',
    focus_price:false,
    weight:'',
    focus_weight:false,
    
    stock:'',
    focus_stock:false
})

const {price,weight,stock,focus_price,focus_stock,focus_weight}=editProductDetail


    return (
            <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
                <ProfileHeader onLeftPress={()=>navigation.goBack()} title="Edit Product" iconLeft="arrow-left"/>
                    <View style={styles.imageCollcWrapper}>
                        <View style={styles.imageCollContainer}> 

                            <ScrollView horizontal style={{flex:0.8}}>
                                    <TouchableOpacity style={styles.image}/>

                                    <TouchableOpacity style={styles.image}/>
                                    <TouchableOpacity style={styles.image}/>
                                    <TouchableOpacity style={styles.image}/>
                                    <TouchableOpacity style={styles.image}/>
                                
                                    
                            </ScrollView>
                            <TouchableOpacity style={styles.openCameraBtn}>
                                    <Icon name="camera" size={30} color="#ffff"/>
                            </TouchableOpacity>

                        </View>

                                    


                    </View>
                    <View style={styles.productInfoWrapper}>

                        <FlatList data={editProductOptions} renderItem={({item,index})=>{
                            return <ProductInfoToEdit label={item.title} onPress={()=>onOpenModalItem(item.text)}/>
                        }} keyExtractor={(item)=>item.id.toString()}/>

                    </View>
                    <View style={styles.buttonBottom}>
                        <ConfirmBtn label="cancel" />
                        <ConfirmBtn label="Save" variant="red" />
                    </View>
                    {/* modaleditproductname */}

                    <ModalEditProductName 
                    isVisible={product_name} 
                    value={productNameValue} 
                    onChangeText={(text)=>SetProductName(text)} 
                    onLeftPress={()=>SetformData({...formData,product_name:false})} 
                    disabled={productNameValue.length ===0} 
                    onRightPress={()=>SetformData({...formData,product_name:false})}/>

                    {/* modalproduct category */}

                    <ModalProductCategory isVisible={category} headerTitle="Edit Category" onLeftPress={()=>SetformData({category:false})} disabled={editCategory.length===0}>

                    <FlatList data={selectCategory} renderItem={({index,item})=><Options value={item.value} icon={item.icon} onPress={()=>SeteditCategory(item.value)}/> } keyExtractor={(item)=>item.id.toString()}/>
                    </ModalProductCategory>
                    {/* modalspesicication */}

                    <ModalProductSpecifiction isVisible={specification} iconRight="check" headerTitle="Edit Brand" onLeftPress={()=>SetformData({spesicifation:false})} disabled={editSpecification.length===0}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row',flexWrap:'wrap',width:560}}>
                            {
                                brands.map((v,i)=><SmallCard key={i} source={v.images} onPress={()=>SeteditSpecification(v.brand_name)}/>)
                            }
                          
                        </View>
                        </ScrollView>
                    </ModalProductSpecifiction>

                    {/* modal Product Detail */}

                    <ModalProductDetail 
                    isVisible={product_detail}
                    onLeftPress={()=>SetformData({product_detail:false})}
                    headerTitle="Edit Product Detail"
                    iconRight="check">
                        <InputEditProductDetails 
                        label="Product's Price"
                        inputLabel="Rp."
                      
                        onChangeText={(text)=>SeteditProductDetal({...editProductDetail,price:text})}
                        onFocus={()=>SeteditProductDetal({...editProductDetail,focus_price:true})}
                        onBlur={()=>SeteditProductDetal({...editProductDetail,focus_price:false})}
                        focus={focus_price}
                        defaultValue="1500.000"
                        />

                        <InputEditProductDetails 
                        label="Estimated weight"
                        inputLabel="Gram"
                      
                        onChangeText={(text)=>SeteditProductDetal({...editProductDetail,weight:text})}
                        onFocus={()=>SeteditProductDetal({...editProductDetail,focus_weight:true})}
                        onBlur={()=>SeteditProductDetal({...editProductDetail,focus_weight:false})}
                        focus={focus_weight}
                        defaultValue="150"
                        />

                        <InputEditProductDetails 
                        label="Stock"
                     
                      
                        onChangeText={(text)=>SeteditProductDetal({...editProductDetail,stock:text})}
                        onFocus={()=>SeteditProductDetal({...editProductDetail,focus_stock:true})}
                        onBlur={()=>SeteditProductDetal({...editProductDetail,focus_stock:false})}
                        focus={focus_stock}
                        defaultValue="1"
                        />
                    </ModalProductDetail>

                    {/* modal description */}

                    <ModalProductDescription 
                    isVisible={product_description} 
                    headerTitle="Edit Product Description" 
                    onChangeText={(text)=>SetEditDescription(text)} 
                    disabled={editDescription.length===0} 
                    onLeftPress={()=>SetformData({product_description:false})}
                    IconRight="check"
                    />
                    
            </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    imageCollcWrapper:{
        flex:0.3,
 
        borderColor:'lightgray'
    },
    imageCollContainer:{
        flex:1,
        margin:10
    },
    image:{
        width:100,
        height:100,
        borderWidth:1,
        marginRight:10
    },
    openCameraBtn:{
        flex:0.3,
        borderRadius:5,
        backgroundColor:'#dddddd',
        justifyContent:'center', 
        alignItems:'center'},
    productInfoWrapper:{
        flex:0.6,
 
    },
   
    buttonBottom:
    {flex:0.1,
     borderWidth:1,
     backgroundColor:'#ffff',
     flexDirection:'row',
     borderWidth:1,
     borderColor:'lightgray',
     justifyContent:'space-around',
     alignItems:'center'
    },

})
export default EditProduct
