/**
 * Created by nickming on 2017/5/18.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import dateUtil from '../util/dateUtil';
import Config from '../config/index';
import AppStyle from '../styles/index';

export default class HourlyItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }



    render() {
        let data = this.props.itemData;
        let iconUrl=Config.iconApi+data.cond.code+'.png';
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{dateUtil.getHoursAndMinsByDate(data.date)}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Image style={AppStyle.weatherIcon} source={{uri:iconUrl}}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{data.tmp}°C</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    textContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 15,
        color: 'white',
    }
}