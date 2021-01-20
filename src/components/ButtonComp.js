import * as React from 'react'
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default class LoginButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={styles.loginbtn} onPress={this.props.onPress}>
                <Text>Login</Text>
            </TouchableOpacity>
        )
    }
}

export const SignUpButton = () =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.signUpBtn}>
            <Button title="Don't have an account" hasTest transparent onPress={()=>
                navigation.navigate("SignUp")
            }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginbtn: {
        alignSelf: 'center',
        width: 60,
        marginTop: 30
    },
    signUpBtn: {
        height: 100,
        alignSelf: 'center',
        marginTop: 10, 
        marginBottom: 30
    }
});
