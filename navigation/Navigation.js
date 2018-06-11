import React from 'react'
import { TabNavigator } from 'react-navigation'
import AboutMe from "../components/AboutMe";
import Search from "../components/Search"




const Tabs = TabNavigator({
    AboutMe: {
        screen: AboutMe
    },
    Search: {
        screen: Search
    }

},
    {
        tabBarPotition: 'bottom',
        tabBarOptions:{
            showIcon: true,
            showLabel: false,
            indicatorStyle:{
                heigth: 2,
                backgroundColor: "#FFF"
            }
        },
            style:{
                backgroundColor: "#02273c",
                borderTopWidth:1,
                borderColor: "#3f101c"
            }

    });