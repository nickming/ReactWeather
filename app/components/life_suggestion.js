/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import SuggestionItem from './suggestion_item';

@observer
export default class LifeSuggestion extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text,{marginLeft:10,fontSize:18,marginBottom:10}]}>今日生活指数</Text>
                <SuggestionItem index={0}/>
                <SuggestionItem index={1}/>
                <SuggestionItem index={2}/>
                <SuggestionItem index={3}/>
                <SuggestionItem index={4}/>
                <SuggestionItem index={5}/>
                <SuggestionItem index={6}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor:'transparent',
        marginTop:20
    },
    text: {
        fontSize: 15,
        color: 'white',
        flex: 1,
        backgroundColor: 'transparent'
    },

}