import React from 'react'
import {Text, TextInput, ActivityIndicator, View, StyleSheet} from 'react-native'


export default class Search extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            city: 'Annecy'
        }
    }



    render(){
        return(
            <View style = {styles.view}>
                <TextInput
                    underlineColorAndroid = 'transparent'
                    style = {styles.textInput}
                    value={this.state.city}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    view:{
        flex:1,
        marginTop:20
    },

    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        height: 45,
        margin: 20

    }
})