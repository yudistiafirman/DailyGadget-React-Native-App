import React from 'react'
import {View,StyleSheet} from 'react-native'
function Topheader({children}) {
    return (
        <View style={{ height:300 }}>
                 <View style={{ flex: 0.2, backgroundColor: 'white' }} >

                     <View style={{ backgroundColor: "#3ec1d3",position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,borderBottomRightRadius: 75,flexDirection: 'row',justifyContent: 'space-between'}}/ >
                 </View>

                 <View style={{ flex: 0.8 }}>
                     <View style={{ flex: 1, backgroundColor: "#3ec1d3" }} />
                      <View style={{ flex: 1, }} />

                      <View style={styles.children}>
                        {children}
                     </View>

              </View>
         </View>
    )
}
const styles = StyleSheet.create({
    children: {
      

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 75,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems:'center'
    }

})

export default Topheader
