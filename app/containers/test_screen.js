'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

// var TbsWebView = require('../components/tbs_webview');
import { NewTbsWebView } from 'tbs-webview-module';
import MscSpeech from 'react-native-msc-speech';
// import IOSNativeSpeech from 'native-speech';

export default class TestScreen extends Component {

    static navigationOptions = {
        title: '测试页面'
    }

    constructor(props) {
        super(props);
    }

    _onPressTest = () => {
        if (__ANDORID__) {
            MscSpeech.speak(false,'我是来自android的语音', () => {
                console.log('讯飞回调成功!')
            });
        } else {
            MscSpeech.speak(true,'我是来自ios的语音',()=>{
                console.log('ios native speech')
            });
        }
    }


    render() {
        if (__ANDORID__) {
            return (
                <View style={styles.container}>
                    <Text>测试android</Text>
                    <TouchableOpacity onPress={this._onPressTest}>
                        <Text>测试native</Text>
                    </TouchableOpacity>
                    {/*<NewTbsWebView
                        style={styles.container}
                        url={"http://www.baidu.com"}>
                    </NewTbsWebView>*/}
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>暂时不支持IOS设备</Text>
                    <TouchableOpacity onPress={this._onPressTest}>
                        <Text>测试native</Text>
                    </TouchableOpacity>

                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})