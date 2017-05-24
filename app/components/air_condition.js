/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HourlyItem from './hourly_item';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/weather_store';
import Divider from './divider'
import AqiItem from './air_aqi_item'

@observer
export default class AirCondition extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _handleIndicatorColor = (value) => {
        if (value < 50) {
            return airColors[0];
        } else if (50 < value && value < 100) {
            return airColors[1];
        } else if (100 < value && value < 150) {
            return airColors[2];
        }
        else if (150 < value && value < 200) {
            return airColors[3];
        }
        else if (200 < value && value < 250) {
            return airColors[4];
        } else {
            return airColors[5];
        }
    }

    render() {
        let marginLeftValue = 0;
        if (!weatherStore.loading) {
            let weatherData = weatherStore.getCurrentCityWeather();
            if (weatherData != null) {
                marginLeftValue = weatherData.aqi.city.aqi;
            }
        }
        let offset = marginLeftValue;
        if (offset > 330)
            offset = 330;
        return (
            <View style={styles.container}>
                <Divider dividerHeight={20}></Divider>
                <Text style={[styles.text,{marginLeft:10,fontSize:18,marginTop:10}]}>今日空气质量</Text>
                <View style={[styles.indicatorContainer]}>
                    <Text style={styles.text}>0</Text>
                    <Text style={styles.text}>50</Text>
                    <Text style={styles.text}>100</Text>
                    <Text style={styles.text}>150</Text>
                    <Text style={styles.text}>200</Text>
                    <Text style={styles.text}>250</Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={[styles.indicator,{backgroundColor:airColors[0]}]}></View>
                    <View style={[styles.indicator,{backgroundColor:airColors[1]}]}></View>
                    <View style={[styles.indicator,{backgroundColor:airColors[2]}]}></View>
                    <View style={[styles.indicator,{backgroundColor:airColors[3]}]}></View>
                    <View style={[styles.indicator,{backgroundColor:airColors[4]}]}></View>
                    <View style={[styles.indicator,{backgroundColor:airColors[5]}]}></View>
                </View>
                <View style={styles.currentIndicator}>
                    <Image source={require('../images/water.png')}
                           style={[styles.indicatorImage,{tintColor:this._handleIndicatorColor(marginLeftValue),marginLeft:(parseInt(offset)+5)}]}>
                        <Text style={styles.indicatorText}>{marginLeftValue}</Text>
                    </Image>
                </View>
                <View style={styles.detailColumnContainer}>
                    <View style={styles.detailRowContainer}>
                        <AqiItem index={0}/>
                        <AqiItem index={1}/>
                    </View>
                    <View style={styles.detailRowContainer}>
                        <AqiItem index={2}/>
                        <AqiItem index={3}/>
                    </View>
                    <View style={styles.detailRowContainer}>
                        <AqiItem index={4}/>
                        <AqiItem index={5}/>
                    </View>
                </View>
                <Divider dividerHeight={20}/>
            </View>
        )
    }
}

const airColors = ['#73BB4D', '#EBB541', '#FC9B56', '#F17751', '#A94057', '#7B1F3C'];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },

    indicatorContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    },

    indicator: {
        flex: 1,
        height: 10
    },
    currentIndicator: {
        height: 10
    },
    text: {
        fontSize: 15,
        color: 'white',
        flex: 1,
        backgroundColor: 'transparent'
    },
    indicatorImage: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    indicatorText: {
        fontSize: 13,
        color: 'white',
        backgroundColor: 'transparent',
        marginTop: 8
    },
    detailColumnContainer: {
        flexDirection: 'column',
        marginTop: 30
    },
    detailRowContainer: {
        flexDirection: 'row'
    }
})