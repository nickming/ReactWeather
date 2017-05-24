/**
 * Created by nickming on 2017/5/12.
 */
'use strict';
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, StatusBar, ScrollView, TouchableOpacity, ListView} from 'react-native';
import {observer} from 'mobx-react/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import weatherStore from '../stores/weather_store'
import stateStore from '../stores/state_store'
import AppStyle from '../styles/index'
import Swipeout from 'react-native-swipeout'

@observer
export default class ControlPanel extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _renderCityItem = (item) => {
        var swipeoutBtns = [
            {
                text: '删除',
                backgroundColor: 'red',
                color: 'white',
                onPress: () => {
                    stateStore.removeCityByName(item.cityName);
                    let callback = this.props.callback;
                    callback();
                }
            }
        ];
        return (
            <Swipeout right={swipeoutBtns}
                      autoClose={true}>
                <TouchableOpacity onPress={()=>{weatherStore.changeCurrentCityName(item.cityName)}}>
                    <View style={{backgroundColor:'rgb(63,70,78)',height:45,flex: 1}}>
                        <View
                            style={{backgroundColor:'rgb(63,70,78)',flex: 1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{color:'white',marginLeft:20,fontSize:15,}}>{item.cityName}</Text>
                            <View
                                style={{flexDirection:'row',marginRight:20,justifyContent:'center',alignItems:'center'}}>
                                <Image style={AppStyle.weatherIcon} source={{uri:item.iconUrl}}></Image>
                                <Text style={{color:'white',marginLeft:10,fontSize:15,}}>
                                    {item.tmp}
                                </Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'rgb(54,57,66)'}}></View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }


    render() {
        let navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.topTitle}>ReactWeather</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between', margin:10}}>
                    <Text style={styles.normalText}>我关注的城市</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('CityScreen')}}>
                        <Text style={styles.normalText}>添加</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={stateStore.cityDataSource}
                    renderRow={this._renderCityItem}>
                </ListView>
                <TouchableOpacity onPress={()=>navigation.navigate('SettingScreen')}>
                    <View
                        style={{height:40,backgroundColor:'rgb(63,70,78)',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                        <View
                            style={{height:40,backgroundColor:'rgb(63,70,78)',alignItems:'center',flexDirection:'row'}}>
                            <Icon name='picture' color={'white'} size={15}
                                  style={{backgroundColor:'transparent',marginLeft:20}}></Icon>
                            <Text style={[styles.normalText,{textAlign: 'center',marginLeft:10}]}>更换壁纸</Text>
                        </View>
                        <Icon name='arrow-right' color={'white'} size={15}
                              style={{backgroundColor:'transparent',marginRight:20}}></Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SettingScreen')}>
                    <View
                        style={{height:40,backgroundColor:'rgb(63,70,78)',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                        <View
                            style={{height:40,backgroundColor:'rgb(63,70,78)',alignItems:'center',flexDirection:'row'}}>
                            <Icon name='settings' color={'white'} size={15}
                                  style={{backgroundColor:'transparent',marginLeft:20}}></Icon>
                            <Text style={[styles.normalText,{textAlign: 'center',marginLeft:10}]}>设置</Text>
                        </View>
                        <Icon name='arrow-right' color={'white'} size={15}
                              style={{backgroundColor:'transparent',marginRight:20}}></Icon>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(54,57,66)',
        flexDirection: 'column',
        paddingTop: 20
    },
    topTitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    normalText: {
        fontSize: 15,
        color: 'white'
    }
})