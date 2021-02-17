import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

import style from '../../constants/Styles'

const Map = ({navigation}) => {
    return (
        <MapView
            style={style.map}
            loadingEnabled={true}
            region={{
                latitude: 39.134119,
                longitude: -84.513016,
                latitudeDelta: 0.0200,
                longitudeDelta: 0.0200
            }}/>
    )
}

export default Map