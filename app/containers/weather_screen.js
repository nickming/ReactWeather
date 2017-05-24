/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component, PropTypes} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {observer} from 'mobx-react/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Weather from '../components/weather_root'

@observer
export default class WeatherScreen extends Component {

    static navigationOptions = {
        title: '天气',
        header: null,
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Weather navigation={this.props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});
