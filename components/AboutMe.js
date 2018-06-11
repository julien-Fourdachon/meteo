import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Image, Button} from 'react-native'


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
                        <Text style = {styles.title}>Apropos de l'application</Text>
                        <Text style = {styles.content}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing j'ai pas le temps pour toutes ces conneries
                        </Text>

                        <Button onPress ={() => this.search()} title ='Rechercher une ville'/>
                    </View>
                )


            }
       }


       const styles = StyleSheet.create ({
           title :{
               fontSize: 26,
               fontWeight: 'bold',
               textAlign: 'center',
               marginTop: 20
           },

           content :{
               textAlign: 'center',
               fontSize: 18,
               fontStyle: 'italic',
               color: '#77777b',
               margin: 20

           }
       })