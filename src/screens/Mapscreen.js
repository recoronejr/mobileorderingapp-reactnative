import React from 'react';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map'

const MapScreen = ({navigation}) => {
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Map />
        </SafeAreaView>
    )
}
export default MapScreen
