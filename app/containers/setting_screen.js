/**
 * Created by nickming on 2017/5/9.
 */
'use strict';
import React, {Component, PropTypes} from 'react'
import {Text, View, StyleSheet, StatusBar, ScrollView, Switch, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Divider from '../components/divider'

export default class SettingScreen extends Component {

    static navigationOptions = {
        title: '设置',
        headerStyle: {
            backgroundColor: 'rgb(54,57,66)'
        },
        headerTintColor: 'white'
    }


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _showClearDialog=()=>{
        alert('清除成功!')
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1,backgroundColor:'rgb(239,238,244)'}}>
                    <View style={[styles.itemContainer,{marginTop:20}]}>
                        <Text style={styles.text}>自动定位</Text>
                        <Switch style={styles.itemRight}></Switch>
                    </View>
                    <Divider dividerHeight={1}/>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>自动语音播报</Text>
                        <Switch style={styles.itemRight}></Switch>
                    </View>
                    <Divider dividerHeight={1}/>
                    <TouchableOpacity onPress={this._showClearDialog}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.text}>清除缓存</Text>
                            <Icon name='arrow-right' color={'rgb(54,57,66)'} size={15}
                                  style={{backgroundColor:'transparent',marginRight:20}}></Icon>
                        </View>
                    </TouchableOpacity>

                    <Divider dividerHeight={1}/>
                    <View style={[styles.itemContainer,{marginTop:40}]}>
                        <Text style={styles.text}>关于我们</Text>
                        <Icon name='arrow-right' color={'rgb(54,57,66)'} size={15}
                              style={{backgroundColor:'transparent',marginRight:20}}></Icon>
                    </View>
                    <Divider dividerHeight={1}/>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>当前版本</Text>
                        <Text style={[styles.text,{marginRight:20}]}>V1.0.0</Text>
                    </View>
                    <Divider dividerHeight={1}/>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginLeft: 20,
        fontSize: 15
    },

    itemContainer: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemRight: {
        marginRight: 20
    }
});
