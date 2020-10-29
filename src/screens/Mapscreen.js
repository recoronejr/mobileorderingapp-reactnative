import React from 'react';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Map />
        </SafeAreaView>
    )
}
export default MapScreen
