import React from 'react'
import {SafeAreaView,ScrollView} from 'react-native'
import BestDeal from './BestDeal'
import Brands from './Brands'
import Category from './Category'
import HomeHeader from './HomeHeader'




function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
            <ScrollView style={{flex:1,margin:10}} >
               
                  <Category/>
                  <Brands navigation={navigation}/>
                  <BestDeal/> 
                    
             </ScrollView>
        </SafeAreaView>
                
             )
         }
       
 export default HomeScreen

           


            
                
        
                  
                    









            

                     

                            

                            

                           


                          

              
              

                
