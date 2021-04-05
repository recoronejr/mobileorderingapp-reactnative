import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import style from '../../constants/Styles'

const Map = ({navigation}) => {
    const [region, setRegion] = useState({
        latitude: 38.898819,
        longitude: -77.036690,
        latitudeDelta: 0.015*5,
        longitudeDelta: 0.0121*5
    });
    return (
        <MapView
            style={style.map}
            loadingEnabled={true}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}
        >
            <Marker coordinate={{ latitude: 38.898819, longitude: -77.036690}} title="Sam's Subs" />
            <Marker coordinate={{ latitude: 38.878410, longitude: -76.980430}} title="Mike's Pizza" />
        
        </MapView>
    )
}

export default Map