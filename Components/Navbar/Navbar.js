import React from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Navbar({value,onChangeText,onFocus,onBlur,focus,onFilter,onSort}) {


    const styles=StyleSheet.create({
        navbarContainer:{height:50,borderColor:'lightgray'},
        navbar:{margin:5,flex:1,flexDirection:'row',justifyContent:'space-between'},
        inputfield:{flex:0.9,backgroundColor:focus?"#fffff":'#b4aee8',borderRadius:5,flexDirection:'row',alignItems:'center'},
        ButtonContainer:{flex:0.3,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}
    })

    return (
        <View style={styles.navbarContainer}>
            
            <View style={styles.navbar}>

                <View style={styles.inputfield}>
                    
                    <Icon name="magnify" size={30} color={focus?"#292929":'#ffff'}/>
                    <TextInput value={value} onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur}  placeholderTextColor="#ffff" placeholder="Search"/>
                </View>

             
                <TouchableOpacity onPress={onFilter} style={{height:'100%',width:40,backgroundColor:'#b4aee8',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="filter-variant" size={30} color="#ffff"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={onSort} style={{height:'100%',width:40,backgroundColor:'#b4aee8',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="altimeter" size={30} color="#ffff"/>
                </TouchableOpacity>

                

           

            </View>

            

        </View>
    )
}

export default Navbar
