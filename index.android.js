import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './app/root'

global.__APP__=true;
global.__ANDORID__=true;
global.__IOS__=false;

AppRegistry.registerComponent('ReactWeather', () => Root)
