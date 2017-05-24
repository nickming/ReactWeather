/**
 * Created by nickming on 2017/5/24.
 */
'use strict';
import {observable, computed} from 'mobx';

export default class AqiItem {
    @observable cityName;
    @observable tmp;
    @observable iconUrl;

    constructor(cityName, tmp, iconUrl) {
        this.cityName = cityName;
        this.tmp = tmp;
        this.iconUrl = iconUrl;
    }
}