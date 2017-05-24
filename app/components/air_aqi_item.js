/**
 * Created by nickming on 2017/5/22.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import HourlyItem from './hourly_item';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/weather_store';
import Divider from './divider';

@observer
export default class AqiItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

    }

    render() {
        let itemIndex=this.props.index;
        if (weatherStore.loading) {
            return this._renderLoading();
        } else {
            return this._renderContent(weatherStore.aqiList[itemIndex]);
        }
    }

    _renderLoading = () => {
        return (
            <View style={styles.container}>
                <ActivityIndicator></ActivityIndicator>
            </View>
        )
    }

    _renderContent = (item) => {
        return (
            <View style={styles.container}>
                <View style={styles.columnItem}>
                    <Text style={styles.textTop}>{item.eng_name}</Text>
                    <Text style={styles.textTop}>{item.value}</Text>
                </View>
                <View style={styles.columnItem}>
                    <Text style={styles.textBottom}>{item.chn_name}</Text>
                    <Text style={styles.textBottom}>{item.unit}</Text>
                </View>
                <View style={styles.divider}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    columnItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    textTop: {
        fontSize:15,
        color: 'white'
    },
    textBottom:{
        color:'rgb(211,211,211)',
        fontSize:12
    },
    divider: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        height: 1
    }
});