import React, { useState } from 'react'
import { FlatList, View, Dimensions, Text, Image } from 'react-native'


const wWidth = Dimensions.get('window').width
const height = wWidth * 0.6

const ImageList = ({ image, direct, width }) => {

    const [active, setActive] = useState(0)

    const changeActiveDot = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)

        if (active !== slide) {
            setActive(slide)
        }
    }


    return <View>
        <FlatList pagingEnabled data={image} renderItem={({ index, item }) => <Image style={{ width: width, height: height }} source={item.images} />}
            keyExtractor={item =>item.id} horizontal showsHorizontalScrollIndicator={false} onScroll={changeActiveDot} />
        <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: 200, left: 170 }}>
            <FlatList data={image} renderItem={({ index, item }) => <Text style={{ color: index === active ? 'white' : '#888', margin: 3 }}>⬤</Text>} keyExtractor={item=>item.id} horizontal showsVerticalScrollIndicator={false} />
        </View>
    </View>
}

export default ImageList