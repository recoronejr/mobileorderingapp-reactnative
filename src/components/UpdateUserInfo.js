import React from 'react'

export default class UpdateUserInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text style={styles.textBox} />
                <TextInput style={styles.input} placeholder={this.props.placeholder}/>
            </View> 
        )
    }
}
