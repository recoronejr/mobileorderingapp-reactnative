import * as React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

export default class OrderScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }; 
    }
    componentDidMount() {
    }
    
    render() {
        
        const { navigation: { navigate } } = this.props;

        return (
            <View style = {styles.container}>
                <View style = {styles.mainLbl}>
                <Text>Order Here</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainLbl: {
        marginTop: 50,
    }

});