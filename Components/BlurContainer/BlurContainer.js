import React from 'react'
import { SafeAreaView,StyleSheet} from 'react-native'
import {BlurView} from '@react-native-community/blur';
import BgReg from '../../Support/Svg/blur.svg'

function BlurContainer({children}) {
    return (
      <SafeAreaView style={{flex:1}}>
          <BgReg style={{position:'absolute'}}/>
            <BlurView blurRadius={1} blurType="xlight" style={styles.blurContainer}/>
            {children}
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    blurContainer:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    }
})

export default BlurContainer
