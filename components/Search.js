import React from 'react'
import {Text, TextInput, ActivityIndicator, View, StyleSheet, Image, Button} from 'react-native'
import style from './Style'
import Results from './Results'
import {createStackNavigator} from 'react-navigation'


class Search extends React.Component{


static navigationOptions = {
    title : 'Rechercher une ville',
}

    constructor(props){
        super(props)
        this.state ={
            city: 'Montpellier'
        }
        console.log(this.state)
    }

    setCity (city){
        this.setState({city})
    }
    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
        console.log(this.state.city)

    }



    render(){
        return(
            <View style = {style.view}>
                <TextInput
                    underlineColorAndroid = 'transparent'
                    style = {style.textInput}
                    value={this.state.city}
                    onChangeText = {(text) => this.setCity(text)}
                    onSubmitEditing = {() => this.submit()}
                    />

                <Button color ={ style.color } onPress={ () => this.submit()} title = "Rechercher"/>
            </View>
        )
    }
}




const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    headerBackTitleStyle: style.headerTitle
}
export default createStackNavigator ({

    Search: {
        screen: Search,
        navigationOptions


    },


    Result :{
        screen: Results,
        navigationOptions,

    },



})
