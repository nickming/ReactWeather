/**
 * Created by nickming on 2017/5/22.
 */
'use strict';
import {observable, computed} from 'mobx';
export default class {
    @observable type;
    @observable brf;
    @observable txt;


    constructor(type, brf, txt) {
        this.type = type;
        this.brf = brf;
        this.txt = txt;
    }

}