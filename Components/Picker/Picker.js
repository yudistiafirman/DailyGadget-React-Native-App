import React from 'react'
import {Picker} from '@react-native-picker/picker';
function MyPicker({selectedValue,onValueChange}) {
    return (
        <Picker
                       
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label="Home" value="home" />
        <Picker.Item label="Office" value="office" />
        <Picker.Item label="Apartment" value="apartment" />
        <Picker.Item label="Boarding House" value="boarding" />
        </Picker>
    )
}

export default MyPicker
