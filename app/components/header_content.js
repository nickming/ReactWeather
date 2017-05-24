/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {observer} from 'mobx-react/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import weatherStore from '../stores/weather_store';
import AppStyle from '../styles/index';

@observer
export default class Header extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        let weatherData = weatherStore.getCurrentCityWeather();
        if (weatherData === null) {
            return this._renderLoading();
        } else {
            return this._renderHeader(weatherData);
        }
    }

    _renderLoading = () => {
        return (
            <View style={styles.container}>
                <View style={styles.headerCenter}>
                    <Text style={styles.tempText}>0</Text>
                    <Text style={styles.condText}>Loading</Text>
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.subText}>Loading</Text>
                    <Text style={styles.subText}>Loading</Text>
                </View>
            </View>
        )
    }

    _renderHeader = (weatherData) => {
        return (
            <View style={styles.container}>
                <View style={styles.headerCenter}>
                    <Text style={styles.tempText}>{weatherData.now.tmp+'°C'}</Text>
                    <Text style={styles.condText}>{weatherData.now.cond.txt}</Text>
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.subText}>空气质量:{weatherData.aqi.city.qlty}</Text>
                    <Text style={styles.subText}>{weatherData.now.wind.dir} {weatherData.now.wind.sc}级</Text>
                </View>
            </View>
        );

    }
}

const styles = {
    container: {
        height: 250
    },

    headerCenter: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    tempText:{
        fontSize:80,
        color:'white',
        backgroundColor:'transparent',
        textAlign:'center',
    },

    condText:{
        fontSize:20,
        color:'white',
        backgroundColor:'transparent'
    },

    subText:{
        fontSize:15,
        color:'white',
        backgroundColor:'transparent'
    }


}