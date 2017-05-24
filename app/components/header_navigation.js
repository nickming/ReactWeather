/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {observer} from 'mobx-react/native';
import weatherStore from '../stores/weather_store';
import stateStore from '../stores/state_store'
import AppStyle from '../styles/index'
import ApiConfig from '../config/index'

@observer
export default class NavigationHeader extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        if (stateStore.scrollToEnd) {
            return this._renderScrollHeader();
        } else {
            return this._renderNormalHeader();
        }
    }

    _renderNormalHeader = () => {
        var navigation = this.props.navigation;
        let weatherData = weatherStore.getCurrentCityWeather();
        return (
            <View style={styles.headerTop}>
                <StatusBar translucent={true} barStyle={'light-content'}></StatusBar>
                <TouchableOpacity onPress={()=>this.props.onPress()}>
                    <Icon name='menu' color={'white'} size={20} style={{backgroundColor:'transparent'}}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>{weatherData === null ? '未知' : weatherData.basic.city}</Text>
                <Icon name="share" color={'white'} size={20} style={{backgroundColor:'transparent'}}/>
            </View>
        )
    }

    _renderScrollHeader = () => {
        let weatherData=weatherStore.getCurrentCityWeather();
        let iconUrl=ApiConfig.iconApi+weatherData.now.cond.code+'.png';
        return (
            <View style={styles.headerTop}>
                <StatusBar translucent={true} barStyle={'light-content'}></StatusBar>
                <TouchableOpacity onPress={()=>this.props.onPress()}>
                    <Icon name='menu' color={'white'} size={20} style={{backgroundColor:'transparent'}}></Icon>
                </TouchableOpacity>
                <View style={styles.cityContainer}>
                    <Image style={AppStyle.weatherIcon} source={{uri:iconUrl}}></Image>
                    <Text style={styles.title}>{weatherData === null ? '未知' : weatherData.basic.city}</Text>
                    <Text style={styles.title}>{weatherData.now.tmp}°C</Text>
                </View>
                <Icon name="share" color={'white'} size={20} style={{backgroundColor:'transparent'}}/>
            </View>
        )
    }
}

const styles = {

    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        height: 30,
        padding: 5
    },

    title: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'transparent'
    },

    cityContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
}