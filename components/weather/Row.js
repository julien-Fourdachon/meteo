import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import FadeInView from '../animation/fadeInView'


moment.locale('fr')

export default class Row extends React.Component {


    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toLocaleUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{date}</Text>
        )
    }

    icon(size) {
        const type = this.props.day.weather[0].main.toLowerCase()

        let image

        switch (type) {
            case 'rain':
                image = require('../../icons/rain.png')
                break;

            case 'clouds':
                image = require('../../icons/cloud.png')
                break;
            default :
                image = require('../../icons/sunny.png')
        }
        return (
            <Image source={image} style={{width: size, height: size }}/>
        )
    }


    render() {
        if (this.props.index === 0){

            return (
                <FadeInView  delay={this.props.index * 50}>
                <View style={[style.flex, style.view, style.firstView]}>
                    <View>
                       <Text style ={[style.white, {marginBottom: 10}]}>{this.day()} {this.date()}</Text>
                        {this.icon(90)}
                    </View>
                    <Text style={[style.temp, {fontSize: 36}]}>{Math.round(this.props.day.temp.day)} °C</Text>
                </View>
                </FadeInView>
            )
        }else{
        return (
            <FadeInView delay={this.props.index * 50}>
            <View style={[style.flex, style.view]}>
                <View style ={style.flex}>
                {this.icon(50)}
                <Text style = {{marginLeft : 15}}>{this.day()} {this.date()}</Text>
                </View>
                <Text style={style.temp}>{Math.round(this.props.day.temp.day)} °C</Text>
            </View>
            </FadeInView>
        )
    }}
}


const style = StyleSheet.create({
    white: {
        color: "#FFF"
    },
    bold: {
        fontWeight: 'bold'
    },
    flex : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    firstView :{
        backgroundColor: "#0e6d6d",
        borderBottomWidth: 2,
        borderBottomColor: "#5f1522",
        paddingVertical: 40,
    },
    view: {

        backgroundColor: "#4f5463" ,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: "#5f1522",
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    temp: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 22
    }
})