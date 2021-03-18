import React, { useEffect, useState } from 'react'
import {View,Text, ScrollView,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'

import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../Components/Button/Button';
import RectInput from '../../Components/RectInput/RectInput';
import ModalButton from '../../Components/ModalButton/ModalButton';

import Options from '../../Components/Options/Options';
import { selectCategory } from '../../Support/Constant/dataToMap';
import LeftBadgeInput from '../../Components/LeftBadgeInput/LeftBadgeInput';
import MyCheckBox from '../../Components/CheckBox/CheckBox';
import ProductImageUploader from '../../Components/ProductImageUploader/ProductImageUploader';
import CameraModal from '../../Components/CameraModal/CameraModal'
import AwesomeAlert from 'react-native-awesome-alerts';
import SinglePicker from 'react-native-image-picker'
import TinyPicturePreview from '../../Components/TinyPicturePreview/TinyPicturePreview';
import TinyPictureIcon from '../../Components/TinyPictureIcon/TinyPictureIcon';
import RectButtonIcon from '../../Components/RectButtonIcon/RectButtonIcon';
import ModalProductCategory from '../../Components/ModalProductCategory/ModalProductCategory';
import ModalProductDescription from '../../Components/ModalProductDescription/ModalProductDescription';

function Addproduct({navigation}) {

// Productname Logic and State
const [productname,SetProductname]=useState({
    productValue:'',
    productError:'',
    productFocus:false

})

const {productValue,productError,productFocus}=productname

const onBlurProduct=()=>{
    if(productValue.length ===0){
        SetProductname({...productname,productError:'form cannot be empty,',productFocus:false})
    }else{
        SetProductname({...productname,productError:'',productFocus:false})
    }
}

// Category Logic and State
const [category,SetCategory]=useState({
    categoryValue:'',
    catModal:false,
    errorCategory:''
})

const {categoryValue,catModal,errorCategory}=category

const onCloseCatModal=()=>{
        if(categoryValue){
            SetCategory({...category,catModal:false})
        }else{
            SetCategory({...category,catModal:false,errorCategory:'form cannot be empty'})
        }
     
    
}

//input price logic and state

const [price,SetPrice]=useState({
    priceValue:'0',
    errorPrice:'',
    focusPrice:false

})

const {priceValue,errorPrice,focusPrice}=price

const onBlurPrice=()=>{
    if(priceValue==='0'){
        SetPrice({...price,errorPrice:'you must specified the price,',focusPrice:false})
    }else{
        SetPrice({...price,errorPrice:'',focusPrice:false})
    }
}

//stock state and logic

const [stock,SetStock]=useState({
    stockValue:'1',
    stockFocus:false
})
const {stockValue,stockFocus}=stock

//weight state and logic
const [weight,SetWeight]=useState({
    weightValue:'0',
    weightFocus:false,
    weightError:''

})

const {weightValue,weightFocus,weightError}=weight

const onBlurWeight=()=>{
    if(weightValue==='0'){
        SetWeight({...weight,weightError:'cannot left it 0 as a weight',weightFocus:false})
    }else{
        SetWeight({...weight,weightError:'',weightFocus:false})
    }
}

//condition state and logic

const [conditionValue,SetconditionValue]=useState(false)

//description state and logic

const [description,Setdescription]=useState({
    descriptionValue:'',
    errorDescription:'',
    descriptionModal:false,
})

const {descriptionValue,errorDescription,descriptionModal}=description




const onCloseDescModal=()=>{


    if(descriptionValue.length===0){
        Setdescription({...description,descriptionModal:false,errorDescription:'you must fill up your product description'})
    }else if(descriptionValue.length>0 && descriptionValue.length<30){
        Setdescription({...description,descriptionModal:false,errorDescription:'your description must at least contain 30 characters'})
    }else{
        Setdescription({...description,descriptionModal:false,errorDescription:''})
    }

}

//upload Product Image logic and state

const [image,SetImage]=useState({
    openCameraModal:false,
    imageValue:[],
    showAlert:false,
    openPreview:false,
    pictureIdx:0,
    showConfirm:false,
    errorimage:''
})

const{errorimage,openCameraModal,imageValue,showAlert,openPreview,pictureIdx,showConfirm}=image

const onOpenCamera=()=>{
    ImagePicker.openCamera({
        width: 300,
        height: 300,
     
        cropping: true
      }).then(image => {
             
                    SetImage({...image,imageValue:[...imageValue,image],openPreview:true,openCameraModal:false,pictureIdx:imageValue.length})
            
               
      }).catch((err)=>{
          console.log(err)
      });
}



const onOpenLibary=()=>{
    ImagePicker.openPicker({
        width:300,
        height:300,
 
        multiple:true,
    
        mediaType:'photo'
        
      
    }).then(images=>{
                    if(images.length>5){
                        SetImage({...image,showAlert:true,openCameraModal:false})
                    }else if(imageValue.length+images.length>5){
                        SetImage({...image,showAlert:true,openCameraModal:false})
                    }else{
                        SetImage({...image,imageValue:[...imageValue,...images],openPreview:true,openCameraModal:false,pictureIdx:images.length+imageValue.length-1})
                    }
                 
                
                    //dont forget  validate width,and size of the image
    }).catch((err)=>{
        console.log(err)
    })
}


const onChangeImage=()=>{
    SinglePicker.showImagePicker({mediaType:'photo',storageOptions:{privateDirectory:true}}, (response) => {
       
       
        if (response.didCancel) {
    
        } else if (response.error) {
 
        } else if (response.customButton) {
         
        } else {
            const newValue=[...imageValue]
            newValue[pictureIdx]=response
            SetImage({...image,imageValue:newValue})

            
        }
    })
}

const onDeleteImage=()=>{
    const deleteValue= [...imageValue]
    deleteValue.splice(pictureIdx,1)
    if(deleteValue.length===0){
        SetImage({...image,imageValue:[],openPreview:false})
    }else{
        SetImage({...image,imageValue:deleteValue,pictureIdx:deleteValue.length-1})
    }
    
}

    return (
        <SafeAreaView style={{backgroundColor:'#ffff',flex:1}}>
                <ProfileHeader iconLeft="arrow-left" onLeftPress={()=>navigation.goBack()} title="Add Product"/>
            <ScrollView style={{margin:20}} showsVerticalScrollIndicator={false} >

                    <View style={styles.container}>
                            {/* productname */}

                            <RectInput 
                            value={productValue} 
                            focus={productFocus} 
                            onFocus={()=>SetProductname({...productname,productFocus:true,productError:''})} 
                            onChangeText={(text)=>SetProductname({...productname,productValue:text})} 
                            placeholder="product name" 
                            errortext={productError}
                            onBlur={onBlurProduct} 
                            label="product name"/>
                            
                            {/* category */}
                            <ModalButton 
                            label="Category" 
                            buttonValue={categoryValue?categoryValue:'select category'} 
                            errortext={errorCategory}
                            onPress={()=>SetCategory({...category,catModal:true,errorCategory:''})}
                            
                            />
                            {/* select category modal */}
                           <ModalProductCategory isVisible={catModal} headerTitle="Select your Category" onLeftPress={onCloseCatModal}>
                                    <FlatList data={selectCategory} renderItem={({index,item})=><Options value={item.value} icon={item.icon} onPress={()=>SetCategory({...category,categoryValue:item.value,catModal:false})}/> } keyExtractor={(item)=>item.id.toString()}/>
                           </ModalProductCategory>
                      

                            {/* Price */}

                            <LeftBadgeInput 
                   
                            label="price" 
                            errortext={errorPrice} 
                            focus={focusPrice} 
                            onFocus={()=>SetPrice({...price,focusPrice:true,errorPrice:''})} 
                            onChangeText={(text)=>SetPrice({...price,priceValue:text})} 
                            onBlur={onBlurPrice}
                            type="numeric"
                            satuan="Rp."
                            value={priceValue}
                            />
                      
                         {/* Stock */}
                         <View style={[styles.inputContainer,styles.smallInputContainer]}>
                            <RectInput 
                            label="Stock" 
                            defaultValue={stockValue}
                            onChangeText={(text)=>SetStock({...stock,stockValue:text})}
                            type="numeric"
                            value={stockValue}
                        
                            />
                        </View>

                        {/* weight */}
                     
                        <View style={[styles.inputContainer,styles.weightInputContainer]}>
                               <LeftBadgeInput 
                               label="Weight" 
                               satuan="Gram"
                               onChangeText={(text)=>SetWeight({...weight,weightValue:text})}
                               type="numeric"
                               onFocus={()=>SetWeight({...weight,weightFocus:true,weightError:''})}
                               onBlur={onBlurWeight}
                               focus={weightFocus}
                               errortext={weightError}
                               defaultValue="0"
                               value={weightValue}
                               />
                        </View>

                        {/* Condition */}
                        <MyCheckBox label="condition" initialValue="New" value={conditionValue} onValueChange={(newValue)=>SetconditionValue(newValue)}/>

                        {/* product description */}
                        <ModalButton 
                            label="Product Description" 
                            buttonValue={descriptionValue&&descriptionValue>=30?descriptionValue.slice(0,15)+"...":'Product Description'} 
                            errortext={errorDescription}
                            onPress={()=>Setdescription({...description,descriptionModal:true,errorDescription:''})}
                            
                            />

                  
                        <ModalProductDescription onLeftPress={onCloseDescModal} headerTitle="Insert Your Description" isVisible={descriptionModal} onChangeText={(text)=>Setdescription({...description,descriptionValue:text})} value={descriptionValue}/>
                        
                      
                        {/* product images */}
                        <ProductImageUploader 
                        onPress={()=>SetImage({...image,openCameraModal:true})}  
                        label="Product Images"
                        images={imageValue}
                        onImagePress={()=>SetImage({...image,openPreview:true})}
                        errortext={errorimage}
                        />

                        <CameraModal 
                        isVisible={openCameraModal} 
                        onSwipeComplete={()=>SetImage({...image,openCameraModal:false})} 
                        onOpenCamera={onOpenCamera} 
                        onOpenImage={onOpenLibary}/>

                        <AwesomeAlert 
                        show={showAlert} 
                        showConfirmButton={true} 
                        confirmText="Try Again" 
                        onConfirmPressed={()=>SetImage({...image,showAlert:false,openCameraModal:true})} 
                        message="maximum upload 5 photos" 
                        title="failed to upload image" 
                        showCancelButton={true}   
                        closeOnTouchOutside={true}    
                        onCancelPressed={()=>SetImage({...image,showAlert:false,})}   
                        />

                        <AwesomeAlert
                        show={showConfirm}
                        showConfirmButton={true}
                        onConfirmPressed={()=>SetImage({...image,openPreview:false,imageValue:[],showConfirm:false})}
                        confirmText="yes ,its okay"
                        message="Are you sure you want to delete all pictures?"
                        showCancelButton={true}
                        onCancelPressed={()=>SetImage({...image,showConfirm:false})}
                        />    

                        <ModalProductCategory isVisible={openPreview} onLeftPress={()=>SetImage({...image,showConfirm:true})}  headerTitle="Preview">
                                <View style={{flex:1}}>
                                    <View style={{flex:0.5}}>
                                        {
                                            imageValue.length>0?imageValue.map((v,i)=> i===pictureIdx&&<Image key={i} style={{width:'100%',height:'100%',resizeMode:'contain'}} source={{uri:v.path.slice(0,4)!=='file'?v.uri:v.path}}/>):null
                                        }
                                            
                                    </View>
                                    <View style={{flex:0.2,marginTop:20}}>
                                            <ScrollView style={{marginLeft:10}} horizontal showsHorizontalScrollIndicator={false}>
                                            {
                                               imageValue.length>0? imageValue.map((v,i)=>{
                                                 return  <TinyPicturePreview key={i} onPress={()=>SetImage({...image,pictureIdx:i})} borderColor={pictureIdx===i?'red':'lightgray'} source={{uri:v.path.slice(0,4)!=='file'?v.uri:v.path}}/>
                                                }):null
                                           
                                            }
                                            {
                                             imageValue.length<5? <TinyPictureIcon onPress={()=>SetImage({...image,openCameraModal:true})}/>:null
                                            }
                                            
                                            </ScrollView>
                                    </View>
                               


                                    <View style={{flex:0.3}}>
                                        
                                            <RectButtonIcon iconName="recycle" onPress={onChangeImage} label="change picture" />
                                            <RectButtonIcon iconName="trash-can-outline" label="delete" onPress={onDeleteImage}/>
                                            <RectButtonIcon label="save" color="#ffff" textColor="#ffff" onPress={()=>SetImage({...image,openPreview:false})} iconName="check" bgColor="#7f58ff"/>
                                    </View>
                                </View>
                        </ModalProductCategory>              
                           {/* submit new product button */}
                        <View style={{alignItems:'center',marginBottom:20}}>
                             <Button variant="primary" label="Sell"/>
                        </View>
                         

                    </View>
            </ScrollView >
    </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container:{width:'100%',height:'100%'},

    inputContainer:{height:90,width:'100%',justifyContent:'center'},
    smallInputContainer:{width:'30%'},
    weightInputContainer:{width:'60%'},

})

export default Addproduct

                                           
                                            
                                           




                    

                            
                                    


