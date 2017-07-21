/**
 * Created by nickming on 2017/5/23.
 */
'use strict';
import {observable, computed, asMap, autorun} from 'mobx';
import {StyleSheet, ListView} from 'react-native';
import weatherStore from './weather_store'
import storage from '../config/storage_config'


class StateStore {
    @observable scrollToEnd = false;
    @observable currentCityEngName = '';
    @observable cityList = [];

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    constructor() {

    }

    @computed get cityDataSource() {
        return this.ds.cloneWithRows(this.cityList.slice());
    }

    removeCityByName(name) {
        let index = -1;
        for (let i = 0; i < this.cityList.length; i++) {
            if (this.cityList[i].cityName === name) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            this.cityList.splice(index, 1);
            stateStore.saveLocalCityData();
        }
    }

    saveLocalCityData() {
        storage.save({
            key: 'cities',
            data: JSON.stringify(this.cityList)
        })
    }


    loadLocalCityData() {
        storage.load({
            key: 'cities',
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,
            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
            syncInBackground: true,
        }).then(ret => {
            let array = JSON.parse(ret);
            for (let i = 0; i < array.length; i++) {
                this.cityList.push(array[i]);
            }
            this.cityList = this.removeDuplicatedItem(this.cityList);
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    alert('读取失败')
                    // TODO;
                    break;
                case 'ExpiredError':
                    alert('读取失败')
                    // TODO
                    break;
            }
        });
    }

    removeDuplicatedItem(ar) {
        var ret = [];

        ar.forEach(function (e, i, ar) {
            if (ar.indexOf(e) === i) {
                ret.push(e);
            }
        });

        return ret;
    }

}

const stateStore = new StateStore();
export default stateStore;