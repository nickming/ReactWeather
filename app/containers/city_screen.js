/**
 * Created by nickming on 2017/5/23.
 */
'use strict';

import React, {Component, PropTypes} from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import CitySelect from "react-native-city-select"
import CITYDATA from '../util/cityData'
import stateStore from '../stores/state_store'
import weatherStore from '../stores/weather_store'

@observer
export default class CityScreen extends Component {

    static navigationOptions = {
        title: '选择城市'
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            cityText: '',
            cityId: '',
        }
    }


    handleCitySelect = (cityObj) => {
        stateStore.currentCityEngName = cityObj.cityNameEn.toLowerCase();
        weatherStore.requestWeatherByName(cityObj.cityName)
        let navigation=this.props.navigation;
        navigation.goBack();
    }


    renderCitySelect = () => {
        return (
            <CitySelect
                header={false}
                selectCity={this.handleCitySelect}
                cityData={CITYDATA}
                style={{flex:1}}
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle={'dark-content'}></StatusBar>
                {this.renderCitySelect()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});