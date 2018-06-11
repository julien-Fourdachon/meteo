import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Image, Button} from 'react-native'
import style from './Style'


       export default class AboutMe extends React.Component {

        static NavigationOptions ={
            tabBar: {
              icon: (
                  <Image source ={require('../icons/user.png')} style = {{width:20, height:20}}/>
              )
            }
        }

        search () {
            this.props.navigation.navigate('Search')
        }

            render(){
                return(
                    <View>
                        <Text style = {style.title}>Apropos de l'application</Text>
                        <Text style = {style.content}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing j'ai pas le temps pour toutes ces conneries
                        </Text>

                        <Button color = {style.color} onPress ={() => this.search()} title ='Rechercher une ville'/>
                    </View>
                )


            }
       }


