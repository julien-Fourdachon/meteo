import React from 'react';
import  { View, StatusBar, Button, Image }from 'react-native'
import {createBottomTabNavigator} from "react-navigation";
import Search from "./components/Search";
import AboutMe from "./components/AboutMe";

const Tabs = createBottomTabNavigator({

        Search: {
            screen: Search,
            navigationOptions: () => ({
                tabBarIcon: ({}) => (
                    <Image source ={require('./icons/home.png')} style = {{width:25, height:25, tintColor: "#FFF"}}/>
                )
            })
        },
        AboutMe: {
            screen: AboutMe,
            navigationOptions: () => ({
                tabBarIcon: ({}) => (
                    <Image source ={require('./icons/user.png')} style = {{width:25, height:25, tintColor: "#FFF"}}/>
                )
            })


        }

    },
    {
        tabBarOptions:{
            showLabel: false,
            showIcon: true,
            activeTintColor: "#FFF",
            inactiveTintColor: "#FFF",
            style :{
                backgroundColor: '#a2361d',
                borderTopWidth: 2,
                borderTopColor: '#561e0d'
            }

            }



    });


export default class App extends React.Component {
  render() {
    return (
        <View style = {{flex:1}}>
            <StatusBar hidden = {true}/>
            < Tabs/>
        </View>
    );
  }
}

