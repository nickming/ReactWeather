/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, StatusBar, ScrollView, RefreshControl, DrawerLayoutAndroid} from 'react-native';
import Header from './header_content'
import NavigationHeader from './header_navigation'
import DailyForecast from './daily_forecast'
import {observer} from 'mobx-react/native'
import ControlPanel from './drawer_content';
import HourlyForecast from './hourly_forecast';
import Divider from './divider'
import AirCondition from './air_condition'
import LifeSuggestion from './life_suggestion'
import weatherStore from '../stores/weather_store';
import DrawerLayout from 'react-native-drawer-layout'
import ApiConfig from '../config/index'
import stateStore from '../stores/state_store'

@observer
export default class Weather extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    _closeControlPanel = () => {
        this.refs.drawer.closeDrawer();
    };
    _openControlPanel = () => {
        this.refs.drawer.openDrawer();
    }

    componentWillMount() {
        this._refreshWeatherData();
        stateStore.loadLocalCityData();
    }

    _refreshWeatherData = () => {
        weatherStore.requestWeatherByName(weatherStore.currentCityName);
    }

    _handleScrollEvent = (event) => {
        let offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 250) {
            stateStore.scrollToEnd = true
        } else {
            stateStore.scrollToEnd = false
        }
    }

    _closeDrawer = () => {
        alert('hello')
    }
    
    /**
     * 渲染Android页面
     */
    _renderAndroid = () => {
        var navigation = this.props.navigation;
        return (
            <DrawerLayout
                drawerLockMode={'locked-closed'}
                drawerWidth={300}
                ref="drawer"
                drawerPosition={DrawerLayout.positions.Left}
                renderNavigationView={()=><ControlPanel callback={this._closeDrawer} navigation={navigation} />}>
                <Image style={styles.container} source={{url:ApiConfig.backgroundWallpaper}}
                       resizeMethod={'scale'} blurRadius={25}>
                </Image>
                <View style={styles.container}>
                    <NavigationHeader navigation={this.props.navigation} onPress={this._openControlPanel}/>
                    <ScrollView style={styles.container}
                                scrollEventThrottle={200}
                                onScroll={(e)=>this._handleScrollEvent(e)}
                                showsVerticalScrollIndicator={false}
                                refreshControl={
                    <RefreshControl
                        refreshing={weatherStore.loading}
                        onRefresh={this._refreshWeatherData}
                        tintColor={'white'}
                        titleColor={'white'}
                        title={weatherStore.loading?"刷新中...":'下拉刷新'}/>}>
                        <Header/>
                        <Divider/>
                        <HourlyForecast/>
                        <Divider/>
                        <DailyForecast/>
                        <AirCondition/>
                        <LifeSuggestion/>
                    </ScrollView>
                </View>
            </DrawerLayout>
        )
    }

    /**
     * 渲染ios页面，自带图片背景，android显示有问题
     */
    _renderIOS = () => {
        var navigation = this.props.navigation;
        return (
            <DrawerLayout
                drawerLockMode={'locked-closed'}
                drawerWidth={300}
                ref="drawer"
                drawerPosition={DrawerLayout.positions.Left}
                renderNavigationView={()=><ControlPanel callback={this._closeDrawer} navigation={navigation} />}>
                <Image style={styles.container} source={{url:ApiConfig.backgroundWallpaper}}
                       resizeMethod={'scale'} blurRadius={25}>
                    <NavigationHeader navigation={this.props.navigation} onPress={this._openControlPanel}/>
                    <ScrollView style={styles.transparentBackgroud}
                                scrollEventThrottle={200}
                                onScroll={(e)=>this._handleScrollEvent(e)}
                                showsVerticalScrollIndicator={false}
                                refreshControl={
                    <RefreshControl
                        refreshing={weatherStore.loading}
                        onRefresh={this._refreshWeatherData}
                        tintColor={'white'}
                        titleColor={'white'}
                        title={weatherStore.loading?"刷新中...":'下拉刷新'}/>}>
                        <Header/>
                        <Divider/>
                        <HourlyForecast/>
                        <Divider/>
                        <DailyForecast/>
                        <AirCondition/>
                        <LifeSuggestion/>
                    </ScrollView>
                </Image>
            </DrawerLayout>
        )
    }


    render() {
        if (__ANDORID__) {
            return this._renderAndroid();
        } else {
            return this._renderIOS();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(54,57,66)'
    },
    transparentBackgroud:{
        flex:1,
        backgroundColor: 'transparent'
    }
});
