import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

const TitleComp = () =>{
    return(<Text style ={styles.title}>Title</Text>)
}


const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
        color: '#ffffff',
        marginTop: 100
    }
});

export default TitleComp