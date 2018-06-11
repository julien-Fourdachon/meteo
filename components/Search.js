import React from 'react'
import {Text, TextInput, ActivityIndicator, View, StyleSheet, Image, Button} from 'react-native'
import style from './Style'
import Results from './Results'
import {createStackNavigator} from 'react-navigation'


class Search extends React.Component{


static navigationOptions = {
    title : 'Rechercher une ville'
}
    constructor(props){
        super(props)
        this.state ={
            city: 'Annecy'
        }
    }

    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }



    render(){
        return(
            <View style = {style.view}>
                <TextInput
                    underlineColorAndroid = 'transparent'
                    style = {style.textInput}
                    value={this.state.city}
                    />

                <Button color ={ style.color } onPress={ () => this.submit()} title = "Rechercher"/>
            </View>
        )
    }
}

export default createStackNavigator ({
    Search: {
        screen: Search,

    },
    Result :{
        screen: Results,
    }
})
