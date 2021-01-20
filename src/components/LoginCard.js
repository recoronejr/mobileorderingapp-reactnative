import React from 'react'
import { View, StyleSheet, Button, Navigator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HandleLogin from '../components/HeaderComp'

const LoginCard = () =>{
    return(
        <View style={styles.card}>
            <HandleLogin />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '50%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default LoginCard