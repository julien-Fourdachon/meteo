import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator} from 'react-native'


       export default class AboutMe extends React.Component {

            render(){
                return(
                    <View>
                        <Text style = {styles.title}>Apropos de moi</Text>
                        <Text style = {styles.content}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing j'ai pas le temps pour toutes ces conneries
                        </Text>
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