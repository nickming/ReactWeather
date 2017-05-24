/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {StyleSheet, View, Text, Image, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import weatherStore from '../stores/weather_store';
import DailyItem from './daily_item';

@observer
export default class DailyForecast extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _renderListView = () => {
        return (
            <ListView style={styles.container} dataSource={weatherStore.dailyDataSource}
                        renderRow={this._renderItemView}>
            </ListView>
        )
    }

    _renderItemView=(item)=>{
        return(
            <DailyItem itemData={item}/>
        )
    }

    render() {
        return this._renderListView();
    }
}

const styles = {
    container: {
        flex: 1
    }
}