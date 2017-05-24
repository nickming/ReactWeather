/**
 * Created by nickming on 2017/5/13.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import dateUtil from '../util/dateUtil';
import AppStyle from '../styles/index';
import Config from '../config/index';

@observer
export default class DailyItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        let data = this.props.itemData;
        let iconUrl = Config.iconApi + data.cond.code_d + '.png';
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text,{marginLeft:15}]}>{dateUtil.getMonthAndDayByDate(data.date)}</Text>
                    <Text style={[styles.text,{marginLeft:5}]}>{dateUtil.getWeekdayByDate(data.date)}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'center'}]}>
                    <Image style={AppStyle.weatherIcon} source={{uri:iconUrl}}></Image>
                    <Text style={[styles.text,{alignSelf:'center',marginLeft:5}]}>{data.cond.txt_d}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'flex-end'}]}>
                    <Text style={[styles.text,{marginRight:15}]}>{data.tmp.min}~{data.tmp.max}°C</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },


    textContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row'
    },

    text: {
        fontSize: 15,
        color: 'white',
    }


}