/**
 * Created by nickming on 2017/5/13.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ListView} from 'react-native';
import HourlyItem from './hourly_item';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/weather_store';

@observer
export default class HourlyForecast extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _renderListView = () => {
        return (
            <ListView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                dataSource={weatherStore.hourlyDataSource}
                renderRow={this._renderItemView}>
            </ListView>
        )
    }

    _renderItemView = (item) => {
        return (
            <HourlyItem itemData={item}/>
        )
    }

    render() {
        return this._renderListView();
    }

}
