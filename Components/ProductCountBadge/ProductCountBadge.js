import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

function ProductCountBadge({productcount}) {
    return (
        <View style={styles.badge}>
            <Text style={styles.label}>all products({productcount})</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    badge:{margin:10,width:150,height:30,backgroundColor:'#433520',borderRadius:20,justifyContent:'center',alignItems:'center'},
    label:{color:'#ffff',fontSize:16}
})

export default ProductCountBadge
