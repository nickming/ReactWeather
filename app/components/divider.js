/**
 * Created by nickming on 2017/5/19.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import dateUtil from '../util/dateUtil';

@observer
export default class Divider extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

    }

    render() {
        let dividerHeight = this.props.dividerHeight;
        if (dividerHeight===null)
            dividerHeight=1;
        return (
            <View style={[styles.container,{height:dividerHeight}]}>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgba(100,100,100,0.1)'
    },


}