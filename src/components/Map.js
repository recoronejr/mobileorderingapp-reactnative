import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'


const Map = ({navigation}) => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
        >

        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height: "60%"
    }
})

export default Map